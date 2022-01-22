# (Bônus) - Parte IV - O despertar do terminal

E pra terminar com a energia óh, lá no alto, que tal aprender agora alguns comandos divertidos do Unix? ☝ 🎊

Se você utiliza macOS , precisa ter o gerenciador de pacotes brew instalado, para isso, siga as orientações neste link .

Após instalar o brew , instale o factor e o telnet :

Para instalar o factor, execute no terminal: brew install coreutils ;

Para instalar o telnet, execute no terminal: brew install telnet .

1. Se você utiliza o Linux , abra o terminal e execute o comando sudo apt-get install cmatrix , ou para pessoas usuárias de macOS , utilize no terminal brew install cmatrix . Depois, execute o comando cmatrix . Quando estiver se sentindo como o Neo , aperte ctrl+c para voltar ao terminal;

```bash
# Como meu sitema é baseado no Arch meu instalador de pacotes é diferente:

sudo pacman -S cmatrix
```

2. No sistema Linux , execute o comando sudo apt-get install fortune , ou no macOS brew install fortune , e após a instalação, crie um arquivo de texto chamado fortune.txt que contenha a sua sorte do dia. Utilize apenas uma linha de comando. Dica: use o comando fortune , e o operador > ;

```bash
# Como meu sitema é baseado no Arch meu instalador de pacotes é diferente:

sudo pacman -S fortune-mod

fortune > fortune.txt
```

3. Conte quantas palavras tem a frase da sua sorte do dia. Dica: use o comando wc ;

```bash
wc -w fortune.txt
```

4. Execute o comando sudo apt-get install sl em um terminal Linux , ou brew install sl em um terminal macOS . Após a instalação, execute o comando sl . Agora tente sl -F ;

```bash
# Como meu sitema é baseado no Arch meu instalador de pacotes é diferente:

sudo pacman -S sl

sl -F
```

5. No sistema Linux , execute o comando sudo apt-get install cowsay , ou brew install cowsay no macOS . Após a instalação, execute o comando cowsay e algo que você queira falar. Agora faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt ;

```bash
# Como meu sitema é baseado no Arch meu instalador de pacotes é diferente:

sudo pacman -S cowsay
cat fortune.txt | cowsay
```

6. Descubra os fatores primos usando o comando factor e em seguida o número 42 ;

```bash
factor 42
```

7. Veja como fica a sua sorte do dia ao contrário. Dica: utilize o comando rev .

```bash
rev fortune.tx
```

8. Execute o comando telnet towel.blinkenlights.nl e espere alguns segundos. Lembre-se que você tem mais exercícios para fazer! 😅

```bash
telnet towel.blinkenlights.nl
```

Gostou das curiosidades? Nos Recursos Adicionais tem mais alguns comandos divertidos. Confere lá!
