/*
@Time : 2024/10/5 上午9:06
@Author : ljn
@File : generateAccount
@Software: GoLand
*/

package util

import (
	"crypto/ecdsa"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/crypto"
	"log"
)

func GenerateAccount() map[string]string {
	privateKey, err := crypto.GenerateKey()
	if err != nil {
		log.Fatal(err)
	}
	privateKeyBytes := crypto.FromECDSA(privateKey)
	//fmt.Println("private key: ", hexutil.Encode(privateKeyBytes)[2:]) // privateKey in hex without "0x"

	publicKey := privateKey.Public()
	publicKeyECDSA, ok := publicKey.(*ecdsa.PublicKey)
	if !ok {
		log.Fatal("cannot assert type: publicKey is not of type *ecdsa.PublicKey")
	}

	//publicKeyBytes := crypto.FromECDSAPub(publicKeyECDSA)
	//fmt.Println("publick key: ", hexutil.Encode(publicKeyBytes)[4:]) // publicKey in hex without "0x"

	address := crypto.PubkeyToAddress(*publicKeyECDSA).Hex()
	//fmt.Println("address: ", address) // account address
	data := map[string]string{
		"address":    address,
		"privateKey": hexutil.Encode(privateKeyBytes)[2:],
	}
	return data
}
