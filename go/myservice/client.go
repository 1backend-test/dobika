package myservice

import(
	"github.com/1backend/go-client"
)

var Token string

type Test struct {
	Name	string
	Foods	[]string
}


func GetHi() (string, error) {
	var ret string
	return ret, goclient.New(Token).Call("dobika", "myservice", "GET", "/hi", map[string]interface{}{  }, &ret)
}

func GetImportedHi() (string, error) {
	var ret string
	return ret, goclient.New(Token).Call("dobika", "myservice", "GET", "/imported-hi", map[string]interface{}{  }, &ret)
}

func GetSqlExample() (string, error) {
	var ret string
	return ret, goclient.New(Token).Call("dobika", "myservice", "GET", "/sql-example", map[string]interface{}{  }, &ret)
}

