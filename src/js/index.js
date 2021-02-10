import { Select } from './modules/select'
import { swipe }  from './modules/swipeEvent'
import Upload from './modules/uploadImg'
import Tooltip from './modules/tooltip'

const main = document.querySelector('main')
const body = document.body
const sidebar = document.querySelector('.sidebar')
const sidebarClose = document.querySelector('.sidebar__close')
const mediaQuery = window.matchMedia('(min-width: 1100px)')
const buttonAdd = document.querySelector('.button-add')
const buttonRefresh = document.querySelector('[data-refresh]')
const buttonLogout = document.querySelector('[data-logout]')


Tooltip.init(buttonAdd)
Tooltip.init(buttonRefresh)
Tooltip.init(buttonLogout)

body.classList.add('left', 'right')

const customUpload = new Upload('#file', {
  modeView: 'custom',
  buttonDownLoad: {
    selectorPos: '.card-profile',
    pos: 'beforeend'
  },
  previewPos: {
    selectorPos: '.card-profile',
    pos: 'beforeend'
  },
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files) {
    console.log(files)
  }
})

swipe(main, {
    maxTime: 1000, 
    minTime: 100, 
    maxDist: 150, 
    minDist: 60
})

swipe(body, {
  maxTime: 1000, 
  minTime: 100, 
  maxDist: 150, 
  minDist: 60
})

function openMobileSidebar(e) {
  if (e.detail.dir === 'right') {
    document.body.classList.add('overlay')
    setTimeout(() =>  document.body.classList.add('overlay-active'), 200)
    sidebar.classList.add('sidebar--active')
  }
}

function closeMobileSidebar(e) {
  if (e.detail.dir === 'left') {
    sidebar.classList.remove('sidebar--active')

    setTimeout(() => document.body.classList.remove('overlay-active'), 200)
    setTimeout(() => document.body.classList.remove('overlay'), 400)
  } 

  if (e.target.dataset.close) {
    sidebar.classList.remove('sidebar--active')

    setTimeout(() => document.body.classList.remove('overlay-active'), 200)
    setTimeout(() => document.body.classList.remove('overlay'), 400)
  }
}

main.addEventListener('swipe',  openMobileSidebar)
body.addEventListener('swipe', closeMobileSidebar)
sidebarClose.addEventListener('click', closeMobileSidebar)

if (mediaQuery.matches) {
  console.log('Swipe event handler removed for desktop.')
  main.removeEventListener('swipe', openMobileSidebar)
  body.removeEventListener('swipe', closeMobileSidebar)
  sidebarClose.removeEventListener('swipe', closeMobileSidebar)
}

new Select('#select', {
  placeholder: 'Выбери технологию',
  data: [
    {id: '1', value: 'Категория 1'},
    {id: '2', value: 'Категория 2'},
    {id: '3', value: 'Категория 3'},
    {id: '4', value: 'Категория 4'},
    {id: '5', value: 'Категория 5'},
    {id: '6', value: 'Категория 6'},
  ],
  onSelect(item) {
    console.log('selected item', item)
  }
})

const selectLanguage = new Select('#language', {
  selectedId: '1',
  data: [
    {id: '1', value: 'Русский'},
    {id: '2', value: 'Английский'}
  ],
  itemClass: 'select__item--position',
  template: `<svg class="select__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="../../img/svg/sprite/sprite.svg#russia"></use></svg>, <svg class="select__icon"><use xlink:href="../../img/svg/sprite/sprite.svg#usa"></use></svg>`,
  onSelect(item) {
    console.log('selected item', item)
  }
})

selectLanguage.setClass('.navigation__select .select__input', 'navigation__select-input')
selectLanguage.setClass('.navigation__select .select__input span', 'navigation__select-text')
selectLanguage.setClass('.navigation__select .select__icon', 'navigation__select-icon')
selectLanguage.setClass('.navigation__select .select__dropdown', 'navigation__select-dropdown')
selectLanguage.setClass('.navigation__select .select__item', 'navigation__select-item')

// Переключение сайдбара
const sidebarToggle = document.querySelector('[data-sidebar-toggle]')

sidebarToggle.addEventListener('click', event => {
  const mainLayout = document.querySelector('.app-main-layout')
  const sidebar = document.querySelector('[data-sidebar]')
  const logo = document.querySelector('[data-logo]')
  const logoLink = document.querySelector('[data-logo-link]')
  const userEl = document.querySelector('[data-user]')
  const userImg = document.querySelector('[data-user-img]')
  const userInfo = document.querySelector('[data-user-info]')
  const sidebarTextEls = document.querySelectorAll('[data-nav-text]')
  const sidebarNav = document.querySelector('[data-sidebar-nav]')
  const sidebarIcons = document.querySelectorAll('[data-sidebar-icon]')
  const toggleText = sidebarToggle.querySelector('[data-toggle-text]')
  const toggleIcon = sidebarToggle.querySelector('[data-toggle-icon]')

  sidebar.classList.toggle('mini-sidebar')
  logo.classList.toggle('mini-sidebar__logo')
  logoLink.classList.toggle('mini-sidebar__logo-link')
  userEl.classList.toggle('mini-sidebar__user')
  userImg.classList.toggle('mini-sidebar__user-img')
  userInfo.classList.toggle('mini-sidebar__user-info')
  sidebarNav.classList.toggle('mini-sidebar__nav')
  toggleText.classList.toggle('mini-sidebar__toggle-button-text--hide')
  toggleIcon.classList.toggle('mini-sidebar__toggle-button--active')

  if (mediaQuery.matches) {
    mainLayout.classList.toggle('app-main-layout--sidebar-mini')
  }
  
  for (const text of sidebarTextEls) {
    text.classList.toggle('mini-sidebar__text')
  }

  for (const icon of sidebarIcons) {
    icon.classList.toggle('mini-sidebar__nav-link-icon')
  }

  const sidebarLinks = document.querySelectorAll('.sidebar__nav-link')
  setTimeout(() => Tooltip.init(sidebarLinks), 0); 

  if (event.target.closest('.mini-sidebar') && sidebarLinks.length) {
    const names = ['Счет', 'История', 'Планирование', 'Новая запись', 'Категории']
    sidebarLinks.forEach((link, idx) => {
      link.setAttribute('data-position', 'top')
      link.setAttribute('data-tooltip', names[idx])
    })
  }
})