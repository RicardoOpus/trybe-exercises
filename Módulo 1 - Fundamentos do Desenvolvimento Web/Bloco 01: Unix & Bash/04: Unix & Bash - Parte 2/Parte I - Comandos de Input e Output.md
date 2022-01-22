# Parte I - Comandos de Input e Output

### Pré-requisitos

```bash

mkdir unix_tests

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries" ;
```

- 1 - Navegue até a pasta unix_tests ;

```bash
cd unix_tests
```

- 2 - Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.

```bash
echo "Internet" > skills2.txt ; echo "Unix" >> skills2.txt ; echo "Bash" >> skills2.txt
```

- 3 - Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓

```bash
echo "Phyton" >> skills2.txt ; echo "JavaScript" >> skills2.txt ; echo "PHP" >> skills2.txt ; echo "HTML" >> skills2.txt ; echo "CSS" >> skills2.txt

sort skills2.txt
```

- 4 - Conte quantas linhas tem o arquivo skills2.txt

```bash
wc -l skills2.tx
```

- 5 - Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.

```bash
sort skills2.txt | head -3 >  phrases2.txt
```

- 6 - Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

```bash
echo "By the way" > phrases2.txt ; echo "See the documentation of brownie" >> phrases2.txt ; echo "The keys on a keyboard" >> phrases2.txt
```

- 7 - Conte o número de linhas que contêm as letras br

```bash
grep br phrases2.txt | wc -l
```

- 8 - Conte o número de linhas que não contêm as letras br .

```bash
grep -v br phrases2.txt | wc -l
```

- 9 - Adicione dois nomes de países ao final do arquivo phrases2.txt .

```bash
echo "Georgia" >> phrases2.txt ; echo "Laos" >> phrases2.txt
```

- 10 - Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

```bash
cat phrases2.txt countries.txt > bunch_of_things.txt
```

- 11 - Ordene o arquivo bunch_of_things.txt

```bash
sort -o bunch_of_things.txt bunch_of_things.txt
```
