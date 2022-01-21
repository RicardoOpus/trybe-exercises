#!/bin/bash 

echo -e "\nParte I - Criação de arquivos e diretórios"
echo -e "\nOBS: O diretório onde o Script irá rodar presica estar vazio."
echo -e "\n1 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado unix_tests e navegue até ele."

echo -e "\nRespota: mkdir unix_tests"
echo -e "\nExecutando comando..."
mkdir unix_tests
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n2 - Crie um arquivo de texto com o nome trybe.txt ."
echo -e "\nRespota: touch trybe.txt"
touch trybe.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n3 - Crie uma cópia do arquivo trybe.txt com nome trybe_backup.txt ."
echo -e "\nRespota: cp trybe.txt trybe_backup.txt"
cp trybe.txt trybe_backup.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n4 - Renomeie o arquivo trybe.txt ."
echo -e "\nRespota: mv trybe.txt trybe_novo.txt"
mv trybe.txt trybe_novo.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n5 - Dentro de unix_tests , crie um novo diretório chamado backup ."
echo -e "\nRespota: mkdir ./unix_tests/backup"
mkdir ./unix_tests/backup
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n6 - Mova o arquivo trybe_backup.txt para o diretório backup ."
echo -e "\nRespota: mv trybe_backup.txt ./unix_tests/backup"
mv trybe_backup.txt ./unix_tests/backup
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n7 - Dentro de unix_tests , crie um novo diretório chamado backup2 ."
echo -e "\nRespota: mkdir ./unix_tests/backup2"
mkdir ./unix_tests/backup2
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n8 - Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 ."
echo -e "\nRespota: mv ./unix_tests/backup/trybe_backup.txt ./unix_tests/backup2"
mv ./unix_tests/backup/trybe_backup.txt ./unix_tests/backup2
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n9 - Apague a pasta backup ."
echo -e "\nRespota: rmdir ./unix_tests/backup"
rmdir ./unix_tests/backup
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n10 - Renomeie a pasta backup2 para backup ."
echo -e "\nRespota: mv ./unix_tests/backup2 ./unix_tests/backup"
mv ./unix_tests/backup2 ./unix_tests/backup
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n11 - Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele."
echo -e "\nRespota: pwd ; ls"
pwd ; ls
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n12 - Apague o diretório backup ."
echo -e "\nRespota: rm -rf ./unix_tests/backup"
rm -rf ./unix_tests/backup
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n13 - Limpe o terminal."
echo -e "\nRespota: clear"
clear
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\nPara os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt :
Obsevação: Para os propósitos desse script o aquivo será criado usando linha de comando."
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo 'Internet' > skills.txt ;
echo 'Unix' >> skills.txt ;
echo 'Bash' >> skills.txt ;
echo 'HTML' >> skills.txt ;
echo 'CSS' >> skills.txt ;
echo 'JavaScript' >> skills.txt ;
echo 'React' >> skills.txt ;
echo 'SQL' >> skills.txt ;

echo -e "\n"
echo -e "\n14 - Mostre na tela as 5 primeiras skills do arquivo skills.txt ."
echo -e "\nRespota: head -5 skills.txt "
head -5 skills.txt 
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n15 - Mostre na tela as 4 últimas skills do arquivo skills.txt ."
echo -e "\nRespota: tail -5 skills.txt"
tail -5 skills.txt
read -n 1 -r -s -p $'Precione Enter para próxima questão...'

echo -e "\n"
echo -e "\n16 - Apague todos os arquivos que terminem em .txt ."
echo -e "\nRespota: rm *.txt"
rm *.txt

echo -e "\n"
echo -e "\n============== Fim do exercício =============="
