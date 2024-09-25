import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  ngOnInit(): void {
    const translations = {
      'es': {
        privacyPolicy: `
          <h1>Política de Privacidad</h1>
          <p>
              Toda la información se procesa en su navegador. ¡Tus archivos o datos no se suben a ningún sitio! Tu privacidad es muy importante para nosotros. En consecuencia, hemos desarrollado esta política para que comprendas cómo recopilamos, usamos, comunicamos, divulgamos y utilizamos la información personal. A continuación, se describe nuestra política de privacidad.
          </p>
          <ul>
              <li>Antes o en el momento de recopilar información personal, identificaremos los fines para los cuales se recopila la información.</li>
              <li>Recopilaremos y utilizaremos la información personal únicamente con el objetivo de cumplir con los fines especificados por nosotros y para otros fines compatibles, a menos que obtengamos el consentimiento del individuo o según lo exija la ley.</li>
              <li>Solo retendremos la información personal el tiempo que sea necesario para el cumplimiento de esos fines.</li>
              <li>Recopilaremos información personal por medios legales y justos y, cuando sea apropiado, con el conocimiento o consentimiento del individuo.</li>
              <li>Los datos personales deben ser relevantes para los fines para los cuales se van a utilizar y, en la medida necesaria para esos fines, deben ser precisos, completos y actualizados.</li>
              <li>Protegeremos la información personal mediante medidas de seguridad razonables contra la pérdida o el robo, así como el acceso, la divulgación, la copia, el uso o la modificación no autorizados.</li>
              <li>Pondremos a disposición de los clientes información sobre nuestras políticas y prácticas relacionadas con la gestión de la información personal.</li>
          </ul>
        `
      },
      'en': {
        privacyPolicy: `
          <h1>Privacy Policy</h1>
          <p>
              All processing is done in your browser. Your files or data is not uploaded anywhere! Your privacy is very important to us. Accordingly, we have developed this policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
          </p>
          <ul>
              <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
              <li>We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
              <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
              <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
              <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
              <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
              <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
          </ul>
        `
      }
    };

    const userLang = navigator.language || navigator.language;
    const lang = userLang.startsWith('es') ? 'es' : 'en';
    const texts = translations[lang];

    const privacyElement = document.getElementById('privacy-policy');
    if (privacyElement) {
      privacyElement.innerHTML = texts.privacyPolicy;
    }
  }
}
