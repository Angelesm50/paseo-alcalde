const firebaseErrors = {
  "auth/claims-too-large":
    "La carga útil de la reclamación que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.",
  "auth/email-already-exists":
    "Otro usuario ya está utilizando el correo electrónico proporcionado. Cada usuario debe tener un correo electrónico único.",
  "auth/id-token-expired":
    "El token de ID de Firebase que se proporcionó está vencido.",
  "auth/id-token-revoked": "Se revocó el token de ID de Firebase.",
  "auth/insufficient-permission":
    "La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de Authentication solicitado. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar una credencial con los permisos apropiados y usarla a fin de autenticar los SDK de Admin.",
  "auth/internal-error":
    "El servidor de Authentication encontró un error inesperado cuando se intentaba procesar la solicitud. Para obtener información adicional, revisa la respuesta del servidor de autenticación, que debería estar incluida en el mensaje de error. Si el error persiste, avísanos mediante nuestro canal de asistencia de informe de errores.",
  "auth/invalid-argument":
    "Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional.",
  "auth/invalid-claims":
    "Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.",
  "auth/invalid-continue-uri":
    "La URL de continuación debe ser una string de URL válida.",
  "auth/invalid-creation-time":
    "La hora de creación debe ser una string de fecha en formato UTC válida.",
  "auth/invalid-credential":
    "La credencial que se usa para autenticar los SDK de Admin no se puede emplear a fin de realizar la acción deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.",
  "auth/invalid-disabled-field":
    "El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.",
  "auth/invalid-display-name":
    "El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.",
  "auth/invalid-dynamic-link-domain":
    "El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.",
  "auth/invalid-email":
    "El valor que se proporcionó para la propiedad del usuario email no es válido. Debe ser una dirección de correo electrónico de string.",
  "auth/invalid-email-verified":
    "El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.",
  "auth/invalid-hash-algorithm":
    "El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.",
  "auth/invalid-hash-block-size":
    "El tamaño del conjunto de hash debe ser un número válido.",
  "auth/invalid-hash-derived-key-length":
    "La longitud de la clave derivada de hash debe ser un número válido.",
  "auth/invalid-hash-key":
    "La clave de hash debe ser un búfer de bytes válido.",
  "auth/invalid-hash-memory-cost":
    "El costo de la memoria de hash debe ser un número válido.",
  "auth/invalid-hash-parallelization":
    "La paralelización de hash debe ser un número válido.",
  "auth/invalid-hash-rounds": "Las rondas de hash deben ser un número válido.",
  "auth/invalid-hash-salt-separator":
    "El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.",
  "auth/invalid-id-token":
    "El token de ID que se proporcionó no es un token de ID de Firebase válido.",
  "auth/invalid-last-sign-in-time":
    "La hora del último acceso debe ser una string de fecha en formato UTC válida.",
  "auth/invalid-page-token":
    "El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.",
  "auth/invalid-password":
    "El valor que se proporcionó para la propiedad del usuario password no es válido. Debe ser una string con al menos seis caracteres.",
  "auth/invalid-password-hash":
    "El hash de contraseñas debe ser un búfer de bytes válidos.",
  "auth/invalid-password-salt":
    "La contraseña con sal debe ser un búfer de bytes válido.",
  "auth/invalid-phone-number":
    "El valor que se proporcionó para phoneNumber no es válido. Debe ser una string de identificador que no esté vacía y que cumpla con el estándar E.164.",
  "auth/invalid-photo-url":
    "El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.",
  "auth/invalid-provider-data":
    "providerData debe ser una serie de objetos UserInfo.",
  "auth/invalid-provider-id":
    "providerId debe ser una string del identificador del proveedor compatible válida.",
  "auth/invalid-oauth-responsetype":
    "Se debe configurar solo un responseType de OAuth como verdadera.",
  "auth/invalid-session-cookie-duration":
    "La duración de la cookie de sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.",
  "auth/invalid-uid":
    "El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.",
  "auth/invalid-user-import":
    "El registro de usuarios para importar no es válido.",
  "auth/maximum-user-count-exceeded":
    "Se excedió la cantidad máxima de usuarios permitidos para importar.",
  "auth/missing-android-pkg-name":
    "Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.",
  "auth/missing-continue-uri":
    "Se debe proporcionar una URL de continuación válida en la solicitud.",
  "auth/missing-hash-algorithm":
    "Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.",
  "auth/missing-ios-bundle-id":
    "La solicitud debe contener un ID del paquete de iOS.",
  "auth/missing-uid":
    "Se requiere un identificador uid para la operación actual.",
  "auth/missing-oauth-client-secret":
    "El secreto de cliente de la configuración de OAuth es obligatorio para habilitar el flujo de código de OIDC.",
  "auth/operation-not-allowed":
    "El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.",
  "auth/phone-number-already-exists":
    "Otro usuario ya utiliza el phoneNumber proporcionado. Cada usuario debe tener un phoneNumber único.",
  "auth/project-not-found":
    "No se encontró ningún proyecto de Firebase para la credencial que se usó para inicializar los SDK de Admin. Consulta cómo configurar un proyecto de Firebase si necesitas ver la documentación para generar la credencial de tu proyecto y usarla a fin de autenticar los SDK de Admin.",
  "auth/reserved-claims":
    "Una o más reclamaciones personalizadas de usuarios que se entregaron a setCustomUserClaims() están reservadas. Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.",
  "auth/session-cookie-expired":
    "La cookie proporcionada de la sesión de Firebase venció.",
  "auth/session-cookie-revoked":
    "Se revocaron las cookies de la sesión de Firebase.",
  "auth/uid-already-exists":
    "Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.",
  "auth/unauthorized-continue-uri":
    "El dominio de la URL de continuación no está en la lista blanca. Inclúyelo en la lista en Firebase console.",
  "auth/user-not-found":
    "No existe ningún registro de usuario que corresponda al identificador proporcionado.",

  else: "Error en el servidor.",
};

export default firebaseErrors;
