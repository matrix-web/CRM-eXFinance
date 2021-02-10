const $ = {}

// Modal window
Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

/**
 * 
 * @param {Array} buttons 
 * @returns {Object} DOM element
 */
function _createModalFooter(buttons = []) {
  if (buttons.length === 0) {
    return document.createElement('div')
  }
  const wrap = document.createElement('div')
  wrap.classList.add('modal-footer')

  buttons.forEach(btn => {
    const $btn = document.createElement('button')
    $btn.textContent = btn.text
    $btn.classList.add('button', `button-${btn.type || 'secondary'}`)
    
    $btn.onclick = btn.handler || noop

    wrap.append($btn)
  })

  return wrap
}

/**
 * @param {Object}
 * @returns {Object} - DOM element 
 */
function _createModal({ title = 'Окно', content = '', width, closable, footerButtons}) {
  const DEFAULT_WIDTH = 600
  const modal = document.createElement('div')
  modal.classList.add('modal-wrap')

  modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
      <div class="modal-window" style="width: ${width || DEFAULT_WIDTH}px;">
        <div class="modal-header">
          <span class="modal-title">${title}</span>
          ${closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
        </div>
        <div class="modal-body" data-content>
          ${content}
        </div>
      </div>
    </div>`
  )

  const footer = _createModalFooter(footerButtons)
  footer.appendAfter(modal.querySelector('[data-content]'))
  document.body.append(modal)

  return modal
}

/**
 * * @param {*} options
 * * @returns { Object }
 */
$.modal = function (options) {
  const ANIMATION_SPEED = 200
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
      !closing && $modal.classList.add('open')
    },
    close() {
      closing = true
      $modal.classList.remove('open')
      $modal.classList.add('hide')

      setTimeout(() => {
        $modal.classList.remove('hide')
        closing = false

        if (typeof options.onClose === 'function') {
          options.onClose()
        }
      }, ANIMATION_SPEED)
    }
  } 

  const listener = event => {
    if (event.target.dataset.close) {
      modal.close()
    }
  }

  $modal.addEventListener('click', listener)

  return Object.assign(modal, {
    destroy() {
      $modal.remove()
      $modal.removeEventListener('click', listener)
      destroyed = true
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html
    }
  })
}

$.confirm = function(options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: 400,
      closable: false,
      content: options.content,
      onclose() {
        modal.destroy()
      },
      footerButtons: [
        {text: 'Удалить', type: 'danger', handler() {
          modal.close()
          resolve()
        }},
        {text: 'Отмена', type: 'secondary', handler() {
          modal.close()
          reject()
        }},
      ]
    })
    setTimeout(() => modal.open(), 100)
  })
}

export default $