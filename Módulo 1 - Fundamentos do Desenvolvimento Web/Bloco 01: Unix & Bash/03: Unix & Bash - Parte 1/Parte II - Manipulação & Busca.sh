#!/bin/bash

echo -e "Parte II - Manipulação & Busca"
echo -e "\nOBS: O diretório onde o Script irá rodar deve contar um diretório chamado 'unix_tests'"
echo -e "\n1 - Na pasta unix_tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:"

echo -e "\ncurl -o unix_tests/countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries""

read -n 1 -r -s -p $'Precione Enter para próxima questão...'

curl -o unix_tests/countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries" ;

clear
echo -e "\n2 - Mostre todo o conteúdo do arquivo countries.txt na tela."
echo -e "\nRespota: cat unix_tests/countries.txt"
read -n 1 -r -s -p $'Precione Enter continuar...'
cat unix_tests/countries.txt
echo -e "\n"
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n3 - Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia ."
echo -e "\nRespota: less unix_tests/countries.txt (depois ir apertando 'espaço' até encontar Zambia)"
read -n 1 -r -s -p $'Precione Enter continuar...'
less unix_tests/countries.txt
echo -e "\n"

echo -e "\n"
echo -e "\n4 - Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia ."
echo -e "\nRespota 1: less unix_tests/countries.txt (depois digitar \Brazil para encontrálo no arquivo)"
less unix_tests/countries.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n5 - Busque por Brazil no countries.txt ."
echo -e "\nRespota: grep 'Brazil' unix_tests/countries.txt"
grep 'Brazil' unix_tests/countries.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n6 - Busque novamente por brazil , mas agora utilizando o lower case ."
echo -e "\nRespota: grep -i 'brazil' unix_tests/countries.txt"
grep -i 'brazil' unix_tests/countries.txt
echo -e "\n"
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\nPara os próximos exercícios, crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal."
echo -e "\nOBS: Para os propósitos desse script o arquivo será criado via linha de comando."
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo "Toto, I've got a feeling we're not in Kansas anymore." > unix_tests/phrases.txt ; echo "You talking to me?" >> unix_tests/phrases.txt; echo "I love the smell of napalm in the morning." >> unix_tests/phrases.txt ;

echo -e "\n"
echo -e "\n7 - Busque pelas frases que não contenham a palavra fox ."
echo -e "\nRespota: grep -v "fox" unix_tests/phrases.txt"
grep -v "fox" unix_tests/phrases.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n8 - Conte o número de palavras do arquivo phrases.txt ."
echo -e "\nRespota: wc -w unix_tests/phrases.txt"
wc -w unix_tests/phrases.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n9 - Conte o número de linhas do arquivo phrases.txt ."
echo -e "\nRespota: wc -l unix_tests/phrases.txt"
wc -l unix_tests/phrases.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n10 - Crie os arquivos empty.tbt e empty.pdf ."
echo -e "\ntouch unix_tests/empty.tbt ; touch unix_tests/empty.pdf"
touch unix_tests/empty.tbt ; touch unix_tests/empty.pdf
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n11 - Liste todos os arquivos do diretório unix_tests ."
echo -e "\nRespota: ls unix_tests"
ls unix_tests
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n12 - Liste todos os arquivos que terminem com txt ."
echo -e "\nRespota: cd unix_tests ; ls *.txt"
cd unix_tests ; ls *.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n13 - Liste todos os arquivos que terminem com tbt ou txt ."
echo -e "\nRespota: ls *.txt *.tbt"
ls *.txt *.tbt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n14 - Acesse o manual do comando ls ."
echo -e "\nRespota: man ls"
cd ..
man ls
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n============== Fim do exercício =============="
