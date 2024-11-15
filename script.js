const questions = [
    {
        options: [
            "La personalidad puede desarrollarse con el tiempo y las experiencias.",
            "La personalidad es un rasgo inmutable que no cambia."
        ],
        answer: "La personalidad puede desarrollarse con el tiempo y las experiencias."
    },
    {
        options: [
            "La personalidad abarca rasgos como la amabilidad, la estabilidad emocional y la sociabilidad.",
            "La personalidad no incluye características como la amabilidad ni la sociabilidad."
        ],
        answer: "La personalidad abarca rasgos como la amabilidad, la estabilidad emocional y la sociabilidad."
    },
    {
        options: [
            "La identidad se construye principalmente a partir de valores, decisiones y un sentido de pertenencia.",
            "La identidad considera los valores, decisiones y pertenencia como aspectos secundarios en su formación."
        ],
        answer: "La identidad se construye principalmente a partir de valores, decisiones y un sentido de pertenencia."
    },
    {
        options: [
            "La identidad comprende factores que van más allá de los roles sociales.",
            "La identidad se basa exclusivamente en los roles sociales de la persona."
        ],
        answer: "La identidad comprende factores que van más allá de los roles sociales."
    },
    {
        options: [
            "La conexión de Jan con su abuelo le permite comprender mejor la importancia de la memoria y el legado familiar.",
            "Si bien la conexión de Jan con su abuelo es importante, no engloba lo que significa el legado familiar."
        ],
        answer: "La conexión de Jan con su abuelo le permite comprender mejor la importancia de la memoria y el legado familiar."
    },
    {
        options: [
            "Preparar la tarta le permite a Oscar experimentar una libertad emocional que lo ayuda a conectarse de manera genuina con otros.",
            "Preparar la tarta no afecta la libertad emocional de Oscar; es solo una actividad de distracción."
        ],
        answer: "Preparar la tarta le permite a Oscar experimentar una libertad emocional que lo ayuda a conectarse de manera genuina con otros."
    },
    {
        options: [
            "Alguien que ha logrado alcanzar libertad y estabilidad puede inspirar a otros con su historia.",
            "Alguien que ha alcanzado libertad y estabilidad no inspira necesariamente a otros con su historia."
        ],
        answer: "Alguien que ha logrado alcanzar libertad y estabilidad puede inspirar a otros con su historia."
    },
    {
        options: [
            "Las personas con temperamento flemático evitan conflictos y buscan la armonía.",
            "Las personas con temperamento flemático son propensas al conflicto y suelen desafiar la armonía."
        ],
        answer: "Las personas con temperamento flemático evitan conflictos y buscan la armonía."
    },
    {
        options: [
            "El temperamento colérico se caracteriza por energía y determinación en sus metas.",
            "El temperamento colérico es característico de personas que suelen carecer de energía y motivación."
        ],
        answer: "El temperamento colérico se caracteriza por energía y determinación en sus metas."
    },
    {
        options: [
            "La autoaceptación y el autoconcepto son factores clave en la estructura de la autoestima.",
            "La estructura de la autoestima no se relaciona con la autoaceptación ni el autoconcepto."
        ],
        answer: "La autoaceptación y el autoconcepto son factores clave en la estructura de la autoestima."
    },
    {
        options: [
            "La autoevaluación es clave para el crecimiento y el autoconcepto.",
            "La autoevaluación no tiene relación con el crecimiento, solo mejora o empeora el autoconcepto."
        ],
        answer: "La autoevaluación es clave para el crecimiento y el autoconcepto."
    },
    {
        options: [
            "Las personas melancólicas suelen ser reflexivas, detallistas y valoran la profundidad emocional.",
            "Las personas melancólicas tienden a ser impulsivas y no prestan atención a los detalles ni a la profundidad emocional."
        ],
        answer: "Las personas melancólicas suelen ser reflexivas, detallistas y valoran la profundidad emocional."
    },
    {
        options: [
            "Para el protagonista de 'Correr para vivir', correr se convierte en un camino auténtico para la autosuperación y para enfrentar sus desafíos personales.",
            "Aunque el protagonista de 'Correr para vivir' disfruta correr, no lo encuentra relevante para enfrentar sus desafíos personales."
        ],
        answer: "Para el protagonista de 'Correr para vivir', correr se convierte en un camino auténtico para la autosuperación y para enfrentar sus desafíos personales."
    },
    {
        options: [
            "La identidad cultural puede evolucionar con las influencias y experiencias.",
            "La identidad cultural es estática y no cambia con el tiempo."
        ],
        answer: "La identidad cultural puede evolucionar con las influencias y experiencias."
    },
    {
        options: [
            "La libertad implica actuar sin preocuparse por las consecuencias para los demás.",
            "La verdadera libertad también incluye una responsabilidad hacia los demás."
        ],
        answer: "La verdadera libertad también incluye una responsabilidad hacia los demás."
    },
    {
        options: [
            "Las personas con temperamento sanguíneo son sociables, expresivas y disfrutan de nuevas experiencias.",
            "Las personas con temperamento sanguíneo tienden a evitar interacciones sociales y prefieren mantenerse en un entorno de rutina."
        ],
        answer: "Las personas con temperamento sanguíneo son sociables, expresivas y disfrutan de nuevas experiencias."
    },
    {
        options: [
            "Los valores son fundamentales para guiar las decisiones y comportamientos.",
            "Los valores no tienen impacto en las decisiones ni comportamientos."
        ],
        answer: "Los valores son fundamentales para guiar las decisiones y comportamientos."
    },
    {
        options: [
            "Sentir libertad puede ayudar a una persona a superar experiencias difíciles de su pasado.",
            "Sentir libertad no es necesariamente una ayuda para superar experiencias difíciles del pasado."
        ],
        answer: "Sentir libertad puede ayudar a una persona a superar experiencias difíciles de su pasado."
    },
    {
        options: [
            "Adaptarse a un nuevo país puede disminuir la autoestima de alguien al enfrentar barreras culturales y lingüísticas.",
            "Adaptarse a un nuevo país siempre aumenta la autoestima de alguien, sin importar las barreras culturales y lingüísticas."
        ],
        answer: "Adaptarse a un nuevo país puede disminuir la autoestima de alguien al enfrentar barreras culturales y lingüísticas."
    },
    {
        options: [
            "El deporte o una actividad física puede ser un medio para reforzar la autoestima y encontrar un propósito de vida.",
            "El deporte o una actividad física no tienen un impacto significativo en la autoestima o en encontrar un propósito de vida."
        ],
        answer: "El deporte o una actividad física puede ser un medio para reforzar la autoestima y encontrar un propósito de vida."
    },
    {
        options: [
            "Una persona que ha superado muchas dificultades tendrá una mayor confianza en sus habilidades pero aún puede sentir dudas.",
            "Una persona que ha superado muchas dificultades siempre tendrá plena confianza en sus habilidades sin sentir dudas."
        ],
        answer: "Una persona que ha superado muchas dificultades tendrá una mayor confianza en sus habilidades pero aún puede sentir dudas."
    },
    {
        options: [
            "La relación de Jan con su abuelo le permite entender una forma de libertad relacionada con los recuerdos y la independencia de pensamiento.",
            "La relación de Jan con su abuelo no tiene relación con la libertad, pues se enfoca solo en la pérdida de memoria."
        ],
        answer: "La relación de Jan con su abuelo le permite entender una forma de libertad relacionada con los recuerdos y la independencia de pensamiento."
    },
    {
        options: [
            "La tarta de manzana representa un símbolo de esperanza y autenticidad en la vida de Oscar y en la de otros.",
            "La tarta que cocina Oscar no tiene un simbolismo particular; es solo una receta que prepara sin mayor significado."
        ],
        answer: "La tarta de manzana representa un símbolo de esperanza y autenticidad en la vida de Oscar y en la de otros."
    },
    {
        options: [
            "La autoestima baja puede llevar a buscar aprobación constante e inseguridad.",
            "La autoestima baja no afecta en la necesidad de aprobación ni en la seguridad en las decisiones sino solo en la vista y aprobación propia."
        ],
        answer: "La autoestima baja puede llevar a buscar aprobación constante e inseguridad."
    }
    
];

let currentIndex = -1;

// Mostrar las opciones en el modal
function showQuestion(index) {
    currentIndex = index; // Actualiza el índice actual

    const currentQuestion = questions[index];
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = `
        <p>${currentQuestion.options[0]}</p>
        <p>${currentQuestion.options[1]}</p>
    `;
    
    document.getElementById("answer").style.display = "none";
    document.getElementById("modal").style.display = "flex";
}

// Mostrar la respuesta correcta
function showAnswer() {
    if (currentIndex === -1) return; // Asegura que el índice es válido

    const currentQuestion = questions[currentIndex];
    document.getElementById("answer").innerText = `Respuesta correcta: ${currentQuestion.answer}`;
    document.getElementById("answer").style.display = "block";
}

// Cerrar el modal
function closeModal() {
    currentIndex = -1; // Reinicia el índice actual
    document.getElementById("modal").style.display = "none";
}
