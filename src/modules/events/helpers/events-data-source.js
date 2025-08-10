const events = [
  {
    id: 3,
    name: "Devugging Day Orizaba 2025",
    marqueeLabel: "Próximo evento: Devugging Day Orizaba. Este 13 de septiembre de 2025. 11:30 - 5:00 p.m. (GMT-6)",
    description: `
      Únete a nosotros sin ningún costo este 13 de septiembre en Orizaba Veracruz
      para celebrar el crecimiento profesional y personal en el área tecnológica.
      <br/><br/>
      Hablaremos sobre los errores y dificultades que hemos enfrentado en el camino,
      cómo lo abordamos desde diferentes perspectivas, y cómo hemos aprendido de ellos.
      <br/><br/>
      Este evento es una oportunidad para compartir experiencias, aprender de los demás.
      A veces los triunfos se presentan en forma de tropiezos, y queremos celebrar esos
      momentos juntos. ¡No te lo pierdas!
      <br/><br/>
    `,
    startDate: "2025-09-13",
    participationType: "physical", // physical, virtual, hybrid
    officialEventUrl: undefined,
    callToAction: "El registro estará disponible pronto",
    place: {
      name: "Es una sorpresa 😉",
      address: "Orizaba, Veracruz",
    },
    dateLabel: "13 de septiembre del 2025",
    timeLabel: "11:30 a.m. - 5:00 p.m. (GMT-6)",
    invitationVideos: [],
    platform: {},
  },
  {
    id: 1,
    marqueeLabel: "Próximo evento: Nerdearla CDMX 2024. Este del 7 al 9 de noviembre. 10:00 - 14:00",
    name: "Nerdearla CDMX 2024",
    description: `
    <br/><br/>
    ***Nerdearla*** es el evento gratuito de ciencia y tecnología más grande de Latinoamérica. Organizado por Sysarmy, la comunidad de sistemas, desde 2014 en Argentina, desde 2023 en Chile y a partir de 2024 también en México.
    <br/><br/>
Nerdearla es una experiencia social, tanto en el formato presencial como online. Es una conferencia que cuenta con charlas y talleres técnicos, encuentros sobre divulgación científica y actividades lúdicas de ciencia y tecnología
; espacios de coworking, interacciones en vivo y muchas oportunidades para hacer networking y aprender de líderes de la industria.
    <br/><br/>
      <strong>Para participar en Nerdearla, simplemente visita nuestro sitio web oficial y sigue las instrucciones de registro. Puedes elegir la opción de asistir al evento presencial al final del formulario de inscripción. ¡No te pierdas la oportunidad de ser parte de esta increíble experiencia! </strong>
      <br/><br/>
    `,
    startDate: "2024-11-7",
    participationType: "hybrid", // physical, virtual, hybrid
    officialEventUrl: "https://nerdear.la/es/?utm=devu.community",
    invitationVideos: [
      {
        title: "¿Qué es Nerdearla?",
        url: null,
        iframe: `<iframe loading="lazy" width="100%" height="100%" src="https://www.youtube.com/embed/Nn7HWUvcEBU?si=OEeqzyA78tp_imwB&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
      }
    ],
    platform: {
      name: "No definido",
      link: "",
    },
    place: {
      name: "CDMX",
      address: "Av. Morelos 67, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX, Mexico",
    },
    dateLabel: "7 al 9 de noviembre",
    callToAction: "¡Regístrate ahora!",
  },
  {
    id: 2,
    name: "DevFest 2024 Xalapa",
    description: "El DevFest llega a Xalapa en su segunda edición, dirigido a estudiantes y desarrolladores (desde principiantes hasta expertos) de la región y el estado. Disfruten de este gran evento tecnológico que se realiza a nivel mundial. ¡No te pierdas de nuestras charlas, demostraciones prácticas, talleres y laboratorios de código! Próximamente más información.",
    startDate: "2024-12-6",
    participationType: "hybrid", // physical, virtual, hybrid
    officialEventUrl: "https://gdg.community.dev/events/details/google-gdg-xalapa-presents-devfest-2024-xalapa/",
    place: {
      name: "UV - Contaduría y Administración",
      address: "S/N Universidad Veracruzana, Xalapa-Enríquez, 91090",
    },
    dateLabel: "7 de diciembre del 2024",
    timeLabel: "9:30 a.m. - 5:00 p.m. (GMT-6)",
    callToAction: "¡Conocer más!",
    invitationVideos: [],
    platform: {},
  },
]

export default events;
