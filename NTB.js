const mediaQuery = window.matchMedia('(min-width: 845px)')
const mediaQuery2 = window.matchMedia('(max-width: 844px)')

function laptop(e) {
  if (e.matches) {
    alert("switched to laptop view")
  }
}
function mobile(f) {
  if (f.matches) {
    alert("switched to mobile view")
    
  }
}

mediaQuery.addListener(laptop)
mediaQuery2.addListener(mobile)

laptop(mediaQuery)
mobile(mediaQuery2)