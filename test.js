let data = [
  { menu: 'TOTAL', name: '总菜单', lastChild: true, hasChild: true },
  { menu: 'A', name: '菜单A', lastChild: false,  hasChild: true },
  { menu: 'A-A', name: '菜单A_A', lastChild: false,  hasChild: false },
  { menu: 'A-B', name: '菜单A_B', lastChild: false, hasChild: true },
  { menu: 'A-B-A', name: '菜单A_B_A', lastChild: true, hasChild: false },
  { menu: 'A-C', name: '菜单A_C', lastChild: true, hasChild: false },
  { menu: 'B', name: '菜单B', lastChild: true, hasChild: true },
  { menu: 'A-B', name: '菜单A_B', lastChild: true, hasChild: false },

]

class Menu {
  constructor(data) {
    this.menu = data && data.menu;
    this.name = data && data.name;
    this.childs = [];
  }
}

function ManageMenu() {
  const stack = [new Menu]
  this.deal = function(data) {
    let menuItem = new Menu(data)
    getTop(stack).childs.push(menuItem);
    if (data.hasChild) {
      stack.push(menuItem)
    }
    if (data.lastChild && !data.hasChild) {
      stack.pop()
    }


    console.log('stack:', JSON.stringify(stack))

  }
  this.getOutput = () => stack
}

function getTop(stack) {
  return stack[stack.length - 1]
}

let manageMenu = new ManageMenu()

data.forEach(item => {
  manageMenu.deal(item)
})

console.log(manageMenu.getOutput())
