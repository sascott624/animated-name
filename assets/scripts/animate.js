class Animate {
  constructor(letters) {
    this.letters = letters

    window.setTimeout(() => {
      this.typewriter()
    }, 1000)
  }

  typewriter() {
    for(let i = 0; i < this.letters.length; i++) {
      const letter = this.letters[i]
      const previous = grid[i - 1] ? grid[i - 1] : { letter: '' }
      const timeout = previous.letter === grid[i].letter ? 0.15 : previous.letter === 'h' ? 0.80 : Math.random()

      window.setTimeout(() => {
        letter.style.width = grid[i].width
        letter.style.height = grid[i].height

        letter.style.left = grid[i][1].left
        letter.style.top = grid[i][1].top
      }, 500 * (i + timeout))
    }
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
