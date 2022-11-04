# JAVA :coffee:

#### Classe

public class NomeDaClass {

}



#### Método

​		public static void main (String [] args) {

​		System.out.print ("Olá")

​	}

### Juntando os dois

public class NomeDaClass {

​		public static void main (String [] args) {

​		System.out.print ("Olá")

​	}

}



### Variáveis

*Tipo* **nomeDaVariavel** = Atribuição; (As vezes opcional)

*String* **carro1_$** = "Sedan";

- Apenas letras, números, _ ou $
- Nunca começa com número
- Inicia com letra minúscula (boa prática)
- Sem espaços ou palavras chave da linguagem

Para trocar o valor de atribuição:

*int* **anoFabricacao** = 2015

**anoFabricacao** = 2022 (O tipo da variável é mantido, sem necessidade de repetir)

#### Variáveis Imutáveis (Constantes)

- Quando a própria varaiável ja entrega o significado e é escrita em caps lock. (Convenção)

*String* **BR** = "Brasil";

*int* **PI** = "3.14";

- O tipo *final* garante que a variável não vai mudar.

*final* *String* **BR** = "Brasil";



### Estruturas

*TipoRetorno* **nomeObjetivoNoInfinitivo** (Parâmetro(s))

*int* **somar** (*int* **númeroUm**, *int* **numero2**)

*String* **formatarCep** (*long* **cep**)





 ### Organização por Pacotes

Criar pastas no vscode, uma dentro da outra, seguindo uma ideia de organização:

**Exemplo:** edu > eduardo > primeirasemana / segundasemana / terceirasemana

A primeira pasta indica o tipo de conteúdo guardado no pacote:

edu (educação); com (comercial); 



Os arquivos java receberão uma linha de código indicando que está dentro de um pacote:

*package* edu.eduardo.primeirasemana;





### Tipos de Variáveis



Tabela de Tipos Primitivos e seus valores:

| Tipo    | Memória | Valor Máximo               | Valor Mínimo                        |
| ------- | ------- | -------------------------- | ----------------------------------- |
| byte    | 1 byte  | 127                        | -128                                |
| short   | 2 byte  | 32.767                     | -32.768                             |
| int     | 4 bytes | 2.147.483.647              | -2.147.483.648                      |
| long    | 8 bytes | 9.223.372.036.854.775.807L | -9.223.372.036.854.775.808          |
| boolean | 1 bit   | Lógico                     | false; true                         |
| char    | 1 byte  | caractere                  | 'A'                                 |
| String  |         | Texto                      | "abcdefghi"                         |
| Classe  |         | Classe que representa algo | Date dataNascimento = new Date ( ); |

Os tipos primitivos que podem conter partes fracionárias podem ser representados por dois tipos:

| Tipo   | Memória | Mínimo         | Máximo        | Precisão      |
| ------ | ------- | -------------- | ------------- | ------------- |
| float  | 4 bytes | -3,4028E + 38F | 3,4028E + 38  | 6 – 7 dígitos |
| double | 8 bytes | -1,7976E + 308 | 1,7976E + 308 | 15 dígitos    |



Tipos não numéricos:

| Tipo    | Memória | Função                     | Exemplo de valor                    |
| ------- | ------- | -------------------------- | ----------------------------------- |
| boolean | 1 bit   | Lógico                     | false; true                         |
| char    | 1 byte  | Caractere                  | 'A'                                 |
| String  |         | Texto                      | "abcdefghi"                         |
| Classe  |         | Classe que representa algo | Date dataNascimento = new Date ( ); |



### Operador ternário

**Forma padrão:**

*if*  (a==b)

​		**resultado** = verdadeiro;

*else*

​		**resultado** = falso;



**Forma Abreviada em uma linha:**

*String* **resultado** = a == b *?* "verdadeiro" *:* "falso";

*ou*

*int* **resultado** = a == b *?* 1 *:* 0 ; 



**Checando igualdade em strings ou objetos:**

Ao invés de **==** utilizase **.equals( )**

System.out.println(nomeUm.*equals*(nomeDois));



| Operador Lógico | Significado |
| :-------------- | ----------- |
| \|\|            | OU          |
| &&              | E           |

