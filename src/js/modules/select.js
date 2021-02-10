const getTemplate = (data = [], placeholder, selectedId, itemClass, listClass, template) => {
  let text = placeholder ?? 'Выберите значение'

  itemClass = itemClass ?? ''
  listClass = listClass ?? ''
  template =  template ?? ''

  const htmlTemplates = template.trim().split(',')

  const items = data.map((item, idx) => {
    let cls = ''
    if (item.id === selectedId) {
      text = item.value
      cls = 'selected'
    }

    if (htmlTemplates.length && template) {
      return `<li class="select__item ${itemClass} ${cls}" aria-label="select-item" data-type="item" data-id="${item.id}">
        <span style="pointer-events: none;">${item.value}</span>
        ${htmlTemplates[idx]}
      </li>`
    } else {
      return `<li class="select__item ${itemClass} ${cls}" aria-label="select-item" data-type="item" data-id="${item.id}">${item.value}</li>`
    }
  })

  return `
    <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input" aria-label="select-input">
        <span data-type="value">${text}</span>
        <svg class="select__icon" data-type="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <use xlink:href="../../img/svg/sprite/sprite.svg#arrow-down"></use>
        </svg>
      </div>
      <div id="select" class="select__dropdown" aria-label="dropdown">
        <ul class="select__list ${listClass}">
          ${items.join('')}
        </ul>
      </div>
  `
}

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.options = options || []
    this.selectedId = options.selectedId
    this.itemClass = options.itemClass
    this.listClass = options.listClass
    this.template = options.template
    this.isSelect = document.querySelector(selector) ? true : false
    this.render()
    this.setup()
  }

  render() {
    if (this.isSelect) {
      const { placeholder, data, selectedId, itemClass, listClass, template} = this.options
      this.$el.classList.add('select')
      this.$el.setAttribute('role', 'select')
      this.$el.insertAdjacentHTML('afterbegin', getTemplate(data, placeholder, selectedId, itemClass, listClass, template))
      this.$el.querySelector('[data-type="input"]').setAttribute('tabindex', '0')
    }
  }

  setup() {
    if (this.isSelect) {
      this.clickHandler = this.clickHandler.bind(this)
      this.$el.addEventListener('click', this.clickHandler)
      this.$arrow = this.$el.querySelector('[data-type="arrow"]')
      this.$value = this.$el.querySelector('[data-type="value"]')
    }
  }

  clickHandler(event) {
    const { type } = event.target.dataset
    
    if (type === 'input') {
      this.toggle()
    } else if (type === 'item') {
      const id = event.target.dataset.id
      this.select(id)
    } else if (type === 'backdrop') {
      this.close()
    }
  }

  setClass(selector, className) {
    const elements = document.querySelectorAll(selector)    

    if (elements.length >= 1) {
      elements.forEach(elem => elem.classList.add(className))
    } 
  }

  get isOpen() {
    return this.$el.classList.contains('open')
  }

  get current () {
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id) {
    if (this.isSelect) {
      this.selectedId = id
      this.$value.textContent = this.current.value
      this.$el.querySelectorAll('[data-type="item"]').forEach(el => el.classList.remove('selected'))
      this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')

      this.options.onSelect ? this.options.onSelect(this.current) : null
      this.close()
    }
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  open() {
    if (this.isSelect) {
      this.$el.classList.add('open')
      this.$arrow.style.transform = `rotate(180deg)`;
    }
  }

  close() {
    if (this.isSelect) {
      this.$el.classList.remove('open')
      this.$arrow.style.transform = `rotate(0deg)`;
    }
  }

  destroy() {
    if (this.isSelect) {
      this.$el.removeEventListener('click', this.clickHandler)
      this.$el.remove()
    }
  }
}