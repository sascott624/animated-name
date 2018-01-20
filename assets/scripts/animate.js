class Animate {
  constructor(letters) {
    this.letters = letters

    window.setTimeout(() => {
      this.finalPlacement()
    }, 1000)
  }

  finalPlacement() {
    for(let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i]
      letter.style.width = grid[i].width
      letter.style.height = grid[i].height

      letter.style.left = grid[i][1].left
      letter.style.top = grid[i][1].top
    }
  }

}

window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll('.letter')
  const animator = new Animate(letters)
})
