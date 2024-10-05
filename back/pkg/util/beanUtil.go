package util

import (
	"encoding/json"
	"fmt"
	"reflect"
)

var BeanUtil = NewBeanUtilsImpl()

type BeanUtilsImpl struct{}

func NewBeanUtilsImpl() *BeanUtilsImpl {
	return &BeanUtilsImpl{}
}

func (b *BeanUtilsImpl) CopyProperties(itemOne interface{}, itemTwo interface{}) {
	by, err := json.Marshal(&itemOne)
	if err != nil {
		fmt.Printf("json marshal error:%v", err)
		return
	}
	err = json.Unmarshal(by, &itemTwo)
	if err != nil {
		fmt.Printf("json unmarshal error:%v", err)
		return
	}
}

func (b *BeanUtilsImpl) IsEmpty(itemOne interface{}, itemTwo interface{}) bool {
	return reflect.DeepEqual(itemOne, itemTwo)
}

func (b *BeanUtilsImpl) ParseList(strList string, newList interface{}) {
	err := json.Unmarshal([]byte(strList), &newList)
	if err != nil {
		fmt.Printf("json unmarshal error:%v", err)
		return
	}
}
