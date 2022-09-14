/* POO
1. Abstracción= UML(Lenguaje unificado de modelado). Estructura y comportamiento.
Diagramas de clases y objetos.

2. Encapsulación= Aisla atributos de interferencias exteriores. Modificadores de
acceso ( - private, + public).

3. Herencia= Se heredan atributos o propiedades del padre (# protected).

4. Polimorfismo=  Muchas formas.

Clase => Objeto a través de: Instancia.
Instancia = Creación

Objeto contiene: Atributos/Propiedades/Características. Van en minúscula.
                 Métodos(Comportamiento). Se recomienda que sean públicos.

Clase = Plantilla/Guía/Base predeterminada. SIEMPRE EN MAYÚSCULA.

class Persona{
    Atributos
    UML
        -nombre: string
        -apellido: string
        -edad: int

    get & set
        +altura: double
        #peso: double

    Métodos
        +caminar(): _____
        +hablar(): string
}
*/