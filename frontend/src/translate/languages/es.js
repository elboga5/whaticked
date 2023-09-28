const messages = {
  es: {
    translations: {
			signup: {
			  title: "Registro",
			  toasts: {
				success: "¡Usuario creado exitosamente! ¡¡¡Acceso!!!",
				fail: "Error al crear usuario. Comprueba los datos proporcionados.",
			  },
			  form: {
				name: "Nombre",
				email: "Email",
				password: "Contraseña",
			  },
			  buttons: {
				submit: "Registrar",
				login: "¿Ya tiene una cuenta? ¡Ingrese!",
			  },
			},
			login: {
			  title: "Login",
			  form: {
				email: "Email",
				password: "Contraseña",
			  },
			  buttons: {
				submit: "Entrar",
				register: "¿No tiene una cuenta? ¡Registrese!",
			  },
			},
			companies: {
			  title: "Registrar Empresa",
			  form: {
				name: "Nombre de la empresa",
				plan: "Departamento",
				token: "Token",
				submit: "Registrar",
				success: "¡Empresa creada con exito!",
			  },
			},
			auth: {
			  toasts: {
				success: "¡Inicio sesion exitoso!",
			  },
			  token: "Token",
			},
			dashboard: {
			  charts: {
				perDay: {
				  title: "Atendidos Hoy: ",
				},
			  },
			},
			connections: {
			  title: "Conexiones",
			  toasts: {
				deleted: "¡La conexión de WhatsApp se eliminó con éxito!",
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage: "¿Estás seguro? Esta acción no se puede revertir.",
				disconnectTitle: "Desconectar",
				disconnectMessage:
				  "¿Está seguro? Deberá escanear el código QR nuevamente.",
			  },
			  buttons: {
				add: "Agregar whatsapp",
				disconnect: "desconectar",
				tryAgain: "Intentar nuevamente",
				qrcode: "CODIGO QR",
				newQr: "Nuevo CODIGO QR",
				connecting: "Conectando",
			  },
			  toolTips: {
				disconnected: {
				  title: "No se pudo iniciar sesión en WhatsApp",
				  content:
					"Asegúrese de que su teléfono esté conectado a Internet e inténtelo nuevamente o solicite un nuevo código QR",
				},
				qrcode: {
				  title: "Esperando que se lea el código QR",
				  content:
					"Haz clic en el botón 'CODIGO QR' y escanea el Codigo QR con tu celular para iniciar la sesion",
				},
				connected: {
				  title: "¡Conexión establecida!",
				},
				timeout: {
				  title: "Conexión celular perdida",
				  content:
					"Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR.",
				},
			  },
			  table: {
				name: "Nombre",
				status: "Estado",
				lastUpdate: "Última actualización",
				default: "Default",
				actions: "Accion",
				session: "Sesión",
			  },
			},
			whatsappModal: {
			  title: {
				add: "Agregar whatsapp",
				edit: "Editar WhatsApp",
			  },
			  form: {
				name: "Nombre",
				default: "Estándar",
			  },
			  buttons: {
				okAdd: "Adicionar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			  },
			  success: "WhatsApp se guardó correctamente.",
			},
			qrCode: {
			  message: "Escanea el Codigo QR para iniciar la sesión",
			},
			contacts: {
			  title: "Contactos",
			  toasts: {
				deleted: "¡Contacto eliminado exitosamente!",
			  },
			  searchPlaceholder: "Buscar...",
			  confirmationModal: {
				deleteTitle: "Borrar ",
				importTitlte: "Importar contactos",
				deleteMessage:
				  "¿Estás seguro de que deseas eliminar este contacto? Se perderán todos los servicios relacionados.",
				importMessage: "¿Quieres importar todos los contactos desde tu teléfono?",
			  },
			  buttons: {
				import: "mportar contactos",
				add: "Agregar contacto",
			  },
			  table: {
				name: "Nombre",
				whatsapp: "WhatsApp",
				email: "Email",
				actions: "Ajustes",
			  },
			},
			contactModal: {
			  title: {
				add: "Agregar contacto",
				edit: "Editar contacto",
			  },
			  form: {
				mainInfo: "Detalles del contacto",
				extraInfo: "Informaciones adicionales",
				name: "Nombre",
				number: "Número de whatsapp",
				email: "Email",
				extraName: "Nombre del campo",
				extraValue: "Valor",
			  },
			  buttons: {
				addExtraInfo: "Añadir información",
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			  },
			  success: "Contacto guardado exitosamente.",
			},
			queueModal: {
			  title: {
				add: "Agregar Fila",
				edit: "Editar Fila",
			  },
			  form: {
				name: "Nombre",
				color: "Color",
				greetingMessage: "Mensaje de saludo",
				complationMessage: "Mensaje de finalización",
				outOfHoursMessage: "Mensaje fuera de horario",
				ratingMessage: "Revisar mensaje",
				token: "Token",
			  },
			  buttons: {
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			  },
			},
			userModal: {
			  title: {
				add: "Agregar usuário",
				edit: "Editar usuário",
			  },
			  form: {
				name: "Nombre",
				email: "Email",
				password: "Contraseña",
				profile: "Perfil",
			  },
			  buttons: {
				okAdd: "Agregar",
				okEdit: "Guardar",
				cancel: "Cancelar",
			  },
			  success: "Usuario guardado exitosamente.",
			},
			scheduleModal: {
			  title: {
				add: "Nuevo horario",
				edit: "Editar horario",
			  },
			  form: {
				body: "Mensaje",
				contact: "Contacto",
				sendAt: "Fecha de programacion",
				sentAt: "Fecha de envío",
			  },
			  buttons: {
				okAdd: "Agregar",
				okEdit: "guardar",
				cancel: "Cancelar",
			  },
			  success: "Horario guardado exitosamente.",
			},
			tagModal: {
			  title: {
				add: "Nuevo Tiket",
				edit: "Editar Tiket",
			  },
			  form: {
				name: "Nombre",
				color: "Color",
			  },
			  buttons: {
				okAdd: "Agregar",
				okEdit: "gardar",
				cancel: "Cancelar",
			  },
			  success: "Tiket guardada exitosamente.",
			},
			chat: {
			  noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
			},
			uploads: {
			  titles: {
				titleUploadMsgDragDrop: "ARRASTRA Y SUELTA ARCHIVOS EN EL CAMPO A CONTINUACIÓN",
				titleFileList: "Lista de archivos"
			  },
			},      
			ticketsManager: {
			  buttons: {
				newTicket: "Nuevo",
			  },
			},
			ticketsQueueSelect: {
			  placeholder: "Colas",
			},
			tickets: {
			  toasts: {
				deleted: "El servicio en el que estabas ha sido eliminado.",
			  },
			  notification: {
				message: "Mensaje de",
			  },
			  tabs: {
				open: { title: "Abiertos" },
				closed: { title: "Resueltos" },
				search: { title: "Buscar" },
			  },
			  search: {
				placeholder: "Servicio de búsqueda y mensajes.",
			  },
			  buttons: {
				showAll: "Todos",
			  },
			},
			transferTicketModal: {
			  title: "Transferir Ticket",
			  fieldLabel: "Escriba para buscar usuarios",
			  fieldQueueLabel: "Transferir a la cola",
			  fieldQueuePlaceholder: "Seleccione una cola",
			  noOptions: "No se encontraron usuarios con ese nombre",
			  buttons: {
				ok: "Transferir",
				cancel: "Cancelar",
			  },
			},
			ticketsList: {
			  pendingHeader: "En Espera",
			  assignedHeader: "En Servicio",
			  noTicketsTitle: "Nada aqui!",
			  noTicketsMessage:
				"No se encontró ningún servicio con este estado o término de búsqueda",
			  buttons: {
				accept: "Aceptar",
			  },
			},
			newTicketModal: {
			  title: "Crear Ticket",
			  fieldLabel: "Escriba para buscar el contacto",
			  add: "Agregar",
			  buttons: {
				ok: "Guardar",
				cancel: "Cancelar",
			  },
			},
			mainDrawer: {
			  listItems: {
				dashboard: "Panel",
				connections: "Conexiones",
				tickets: "tickets",
				quickMessages: "Respuestas rápidas",
				contacts: "Contactos",
				queues: "Departamentos y Chatbots",
				tags: "Etiquetas",
				administration: "Administración",
				users: "Usuarios",
				settings: "Configuraciones",
				helps: "Ayuda",
				messagesAPI: "API",
				schedules: "Horarios",
				campaigns: "Campañas",
				annoucements: "Anuncios",
				chats: "Chat Interno",
				financeiro: "facturacion",
			  },
			  appBar: {
				user: {
				  profile: "Perfil",
				  logout: "Sair",
				},
			  },
			},
			messagesAPI: {
			  title: "API",
			  textMessage: {
				number: "Número",
				body: "Mensaje",
				token: "Token Registrado",
			  },
			  mediaMessage: {
				number: "Número",
				body: "Nombre del archivo",
				media: "Archivo",
				token: "Token Registrado",
			  },
			},
			notifications: {
			  noTickets: "Ninguna Notificacion",
			},
			quickMessages: {
			  title: "Respuestas Rápidas",
			  buttons: {
				add: "Nueva Respuesta",
			  },
			  dialog: {
				shortcode: "Atajo",
				message: "Respuesta",
			  },
			},
			contactLists: {
			  title: "Listas de Contactos",
			  table: {
				name: "Nombre",
				contacts: "Contactos",
				actions: "Ajustes",
			  },
			  buttons: {
				add: "Nueva Lista",
			  },
			  dialog: {
				name: "Nombre",
				company: "Empresa",
				okEdit: "Editar",
				okAdd: "Agregar",
				add: "Agregar",
				edit: "Editar",
				cancel: "Cancelar",
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage: "Esta acción no se puede revertir.",
			  },
			  toasts: {
				deleted: "Registro Borrado",
			  },
			},
			contactListItems: {
			  title: "Contactos",
			  searchPlaceholder: "buscar",
			  buttons: {
				add: "Nuevo",
				lists: "Listas",
				import: "Importar",
			  },
			  dialog: {
				name: "Nombre",
				number: "Número",
				whatsapp: "Whatsapp",
				email: "E-mail",
				okEdit: "Editar",
				okAdd: "Agregar",
				add: "Agregar",
				edit: "Editar",
				cancel: "Cancelar",
			  },
			  table: {
				name: "Nombre",
				number: "Número",
				whatsapp: "Whatsapp",
				email: "E-mail",
				actions: "Ajustes",
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage: "Esta acción no se puede revertir.",
				importMessage: "¿Quieres importar contactos desde esta hoja de cálculo?",
				importTitlte: "Importar",
			  },
			  toasts: {
				deleted: "Registro Borrado",
			  },
			},
			campaigns: {
			  title: "Campañas",
			  searchPlaceholder: "buscar",
			  buttons: {
				add: "Nueva Campaña",
				contactLists: "Listas de Contactos",
			  },
			  table: {
				name: "Nombre",
				whatsapp: "Conexiones",
				contactList: "Lista de Contactos",
				status: "estado",
				scheduledAt: "Planificación",
				completedAt: "Terminado",
				confirmation: "Confirmación",
				actions: "Ajustes",
			  },
			  dialog: {
				new: "Nueva Campaña",
				update: "Editar Campaña",
				readonly: "Sólo Lectura",
				form: {
				  name: "Nome",
				  message1: "Mensaje 1",
				  message2: "Mensaje 2",
				  message3: "Mensaje 3",
				  message4: "Mensaje 4",
				  message5: "Mensaje 5",
				  confirmationMessage1: "Mensaje de confirmacion 1",
				  confirmationMessage2: "Mensaje de confirmacion 2",
				  confirmationMessage3: "Mensaje de confirmacion 3",
				  confirmationMessage4: "Mensaje de confirmacion 4",
				  confirmationMessage5: "Mensaje de confirmacion 5",
				  messagePlaceholder: "Contenido del mensaje",
				  whatsapp: "Conexion",
				  status: "Estado",
				  scheduledAt: "Planificación",
				  confirmation: "Confirmación",
				  contactList: "Lista de Contactos",
				},
				buttons: {
				  add: "Agregar",
				  edit: "Actualizar",
				  okadd: "Ok",
				  cancel: "Cancelar",
				  restart: "Reiniciar",
				  close: "Cerrar",
				  attach: "Adjuntar archivo",
				},
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage: "Esta acción no se puede revertir.",
			  },
			  toasts: {
				success: "Operación realizada con éxito",
				cancel: "Campaña cancelada",
				restart: "Campaña reiniciada",
				deleted: "Registro eliminado",
			  },
			},
			announcements: {
			  title: "Noticias",
			  searchPlaceholder: "Buscar",
			  buttons: {
				add: "Nueva Noticia",
				contactLists: "Listas de Noticias",
			  },
			  table: {
				priority: "Prioridad",
				title: "Título",
				text: "Texto",
				mediaName: "Archivo",
				status: "Estado",
				actions: "Ajustes",
			  },
			  dialog: {
				edit: "Edición de la Noticia",
				add: "Nueva Noticia",
				update: "Editar Noticia",
				readonly: "Solo lectura",
				form: {
				  priority: "Prioridad",
				  title: "Title",
				  text: "Texto",
				  mediaPath: "Archivo",
				  status: "Estado",
				},
				buttons: {
				  add: "Agregar",
				  edit: "Actualizar",
				  okadd: "Ok",
				  cancel: "Cancelar",
				  close: "Cerrar",
				  attach: "Adjuntar archivo",
				},
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage: "Esta acción no se puede revertir.",
			  },
			  toasts: {
				success: "Operación realizada con éxito",
				deleted: "Registro eliminado",
			  },
			},
			campaignsConfig: {
			  title: "Configuración de campaña",
			},
			queues: {
			  title: "Departamentos y Chatbots",
			  table: {
				name: "Nombre",
				color: "Color",
				greeting: "Mensaje de saludo",
				actions: "Ajustes",
			  },
			  buttons: {
				add: "Agregar Fila",
			  },
			  confirmationModal: {
				deleteTitle: "Borrar",
				deleteMessage:
				  "¿Estás seguro? ¡Esta acción no se puede revertir! Los servicios en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
			  },
			},
			queueSelect: {
			  inputLabel: "Colas",
			},
			users: {
			  title: "Usuários",
			  table: {
				name: "Nombre",
				email: "Email",
				profile: "Perfil",
				actions: "Ajustes",
			  },
			  buttons: {
				add: "Agregar usuário",
			  },
			  toasts: {
				deleted: "Usuario eliminado exitosamente.",
			  },
			  confirmationModal: {
				deleteTitle: "borrar",
				deleteMessage:
				  "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
			  },
			},
			helps: {
			  title: "Centro de Ayuda",
			},
			schedules: {
			  title: "Promgramacion",
			  confirmationModal: {
				deleteTitle: "¿Está seguro de que desea eliminar esta programacion?",
				deleteMessage: "Esta acción no se puede revertir.",
			  },
			  table: {
				contact: "Contacto",
				body: "Mensaje",
				sendAt: "Fecha de Programacion",
				sentAt: "Fecha de envío",
				status: "Estado",
				actions: "Ajustes",
			  },
			  buttons: {
				add: "Nueva Programacion",
			  },
			  toasts: {
				deleted: "Programación eliminada exitosamente.",
			  },
			},
			tags: {
			  title: "Etiquetas",
			  confirmationModal: {
				deleteTitle: "¿Estás seguro de que deseas eliminar esta etiqueta?",
				deleteMessage: "¿Estás seguro de que deseas eliminar esta etiqueta?",
			  },
			  table: {
				name: "Nombre",
				color: "Color",
				tickets: "Registros de etiquetas",
				actions: "Ajustes",
			  },
			  buttons: {
				add: "Nueva etiqueta",
			  },
			  toasts: {
				deleted: "Etiqueta eliminada correctamente.",
			  },
			},
			settings: {
			  success: "La configuración se guardó correctamente.",
			  title: "ajustes",
			  settings: {
				userCreation: {
				  name: "Creación de usuarios",
				  options: {
					enabled: "Activo",
					disabled: "Desactivado",
				  },
				},
			  },
			},
			messagesList: {
			  header: {
				assignedTo: "Asignado a:",
				buttons: {
				  return: "Volver",
				  resolve: "Resolver",
				  reopen: "Reabrir",
				  accept: "Aceptar",
				},
			  },
			},
			messagesInput: {
			  placeholderOpen: "Escriba un mensaje",
			  placeholderClosed:
				"Vuelva a abrir o acepte este ticket para enviar un mensaje.",
			  signMessage: "Firmar",
			},
			contactDrawer: {
			  header: "Detalles de contacto",
			  buttons: {
				edit: "Editar contacto",
			  },
			  extraInfo: "Otras informaciones",
			},
			ticketOptionsMenu: {
			  schedule: "Planificación",
			  delete: "Borrar",
			  transfer: "Transferir",
			  registerAppointment: "Notas de contacto",
			  appointmentsModal: {
				title: "Notas de contacto",
				textarea: "Notas",
				placeholder: "Ingresa aquí los datos que deseas registrar",
			  },
			  confirmationModal: {
				title: "Eliminar el ticket del contacto",
				message:
				  "¡Atención! Se perderán todos los mensajes relacionados con el ticket.",
			  },
			  buttons: {
				delete: "Borrar",
				cancel: "Cancelar",
			  },
			},
			confirmationModal: {
			  buttons: {
				confirm: "Ok",
				cancel: "Cancelar",
			  },
			},
			messageOptionsMenu: {
			  delete: "Borrar",
			  reply: "Responder",
			  confirmationModal: {
				title: "¿Borrar mensaje?",
				message: "Esta acción no se puede revertir.",
			  },
			},
			backendErrors: {
			  ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
			  ERR_NO_DEF_WAPP_FOUND:
				"No se encontró ningún WhatsApp predeterminado. Consulta la página de conexiones.",
			  ERR_WAPP_NOT_INITIALIZED:
				"Esta sesión de WhatsApp no ​​se ha inicializado. Consulta la página de conexiones.",
			  ERR_WAPP_CHECK_CONTACT:
				"No se puede verificar el contacto de WhatsApp. Consulta la página de conexiones.",
			  ERR_WAPP_INVALID_CONTACT: "Este no es un número de WhatsApp válido.",
			  ERR_WAPP_DOWNLOAD_MEDIA:
				"No se pueden descargar medios de WhatsApp. Consulta la página de conexiones.",
			  ERR_INVALID_CREDENTIALS:
				"Error de autenticación. Inténtalo de nuevo.",
			  ERR_SENDING_WAPP_MSG:
				"Error al enviar mensaje de WhatsApp. Consulta la página de conexiones.",
			  ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
			  ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
			  ERR_SESSION_EXPIRED: "Sesión expirada. Por favor ingrese nuevamente.",
			  ERR_USER_CREATION_DISABLED:
				"El administrador ha desactivado la creación de usuarios.",
			  ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso.",
			  ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
			  ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
			  ERR_NO_CONTACT_FOUND: "No se encontraron contactos con este ID.",
			  ERR_NO_TICKET_FOUND: "No se encontraron tickets con esta identificación.",
			  ERR_NO_USER_FOUND: "No se encontraron usuarios con este ID.",
			  ERR_NO_WAPP_FOUND: "No se encontró ningún WhatsApp con este ID.",
			  ERR_CREATING_MESSAGE: "Error al crear mensaje en la base de datos.",
			  ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
			  ERR_FETCH_WAPP_MSG:
				"Error al buscar el mensaje en WhatsApp, quizás sea demasiado antiguo.",
			  ERR_QUEUE_COLOR_ALREADY_EXISTS:
				"Este color ya está en uso, elige otro.",
			  ERR_WAPP_GREETING_REQUIRED:
				"El mensaje de saludo es obligatorio cuando hay más de una Fila.",
			},
		},
  },
};

export { messages };
