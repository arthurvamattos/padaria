const sidebar = document.getElementById('sidebar')
const sidebarHelper = document.getElementById('sidebar-helper')

let aberto = false 
function abrirmenu() {    
    if (aberto) {
        sidebar.style.left = '-340px'
        sidebarHelper.style.right = '100%'
        aberto = false        
    } else {
        sidebar.style.left = '0'
        sidebarHelper.style.right = '0'
        aberto = true
    }
}

sidebarHelper.addEventListener('click', abrirmenu)
sidebar.addEventListener('click', abrirmenu)