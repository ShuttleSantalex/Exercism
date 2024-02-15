package wordy

import (
	"fmt"
	"go/token"
	"go/types"
	"strconv"
	"strings"
)

type operator struct {
	Label  string
	Symbol string
}

type operators map[string]operator

//func getOperator(statement string)

func translateWord(stringToValidate string) *string {
	operators := map[string]string{
		"plus":          "+",
		"minus":         "-",
		"multiplied by": "*",
		"divided by":    "/",
	}

	if _, err := strconv.Atoi(stringToValidate); err == nil {
		return &stringToValidate
	}
	if symbol, ok := operators[stringToValidate]; ok {
		return &symbol // valid operator
	}
	return nil // invalid string
}

func Answer(question string) (int, bool) {

	var codifiedQuestion []string
	filterPunctuation := strings.Replace(question, "?", "", -1)
	for _, word := range strings.Split(filterPunctuation, " ") {
		translatedWord := translateWord(word)
		// its nil we skip
		if translatedWord == nil {
			continue
		}
		codifiedQuestion = append(codifiedQuestion, *translateWord(word))
	}
	// evaluate expression
	fs := token.NewFileSet()
	tr, _ := types.Eval(fs, nil, token.NoPos, strings.Join(codifiedQuestion, ""))

	value, err := strconv.Atoi(tr.Value.String())
	if err != nil {
		fmt.Println("Error during conversion")
	}
	return value, true
}
