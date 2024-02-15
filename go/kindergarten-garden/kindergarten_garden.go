package kindergarten

import (
	"strings"
	"unicode/utf8"
)

// Define the Garden type here.

// The diagram argument starts each row with a '\n'.  This allows Go's
// raw string literals to present diagrams in source code nicely as two
// rows flush left, for example,
//
//     diagram := `
//     VVCCGG
//     VVCCGG`

// dictionary for the plants
var plants = map[rune]string{
	'V': "violets",
	'R': "radishes",
	'C': "clover",
	'G': "grass",
}

// array of children
var children = [12]string{"Alice", "Bob", "Charlie", "David", "Eve", "Fred", "Ginny", "Harriet", "Ileana", "Joseph", "Kincaid", "Larry"}

// constant of plants per child
const plantsPerChildPerRow = 2
const rowsOfPlants = 2

func NewGarden(diagram string, children []string) (*Garden, error) {
	const window = "[window]"
	var garden [3]string
	garden[0] = strings.Repeat(window, 3)

	gardenLength := utf8.RuneCountInString(garden[0])

	garden[1] = strings.Repeat(".", gardenLength)
	garden[2] = strings.Repeat(".", gardenLength)

	diagramArray := strings.Split(diagram, "\n")

	// we skip index 1 as it is the windows
	for j := 1; j <= rowsOfPlants; j++ {
		for i := 0; i < gardenLength; i++ {
			[]rune(garden[j])[i] = diagramArray[i]
		}

	}
}

func (g *Garden) Plants(child string) ([]string, bool) {
	panic("Please implement the Plants function")

}
