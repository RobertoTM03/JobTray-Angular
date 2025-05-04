

# JobTray
- Roberto Tejero Martín
- Andrea Santana López
- Sean Owens Cruz.

# Descripción del Proyecto

JobTray es una aplicación web diseñada para conectar a compañías con profesionales en búsqueda de nuevas oportunidades laborales. Los usuarios pueden explorar una amplia variedad de vacantes y postularse de manera rápida y sencilla. JobTray busca optimizar la experiencia de búsqueda de empleo y agilizar el proceso de contratación al simplificar cada etapa, beneficiando tanto a las empresas como a los candidatos.

# Listado de Requisitos Funcionales

- Usuarios normales y compañías podrán realizar inicio y registro de sesión

- Los usuarios y compañías podrán editar sus perfiles 

- Los usuarios podrán realizar búsqueda y filtrado de ofertas laborales.
    
- Los usuarios podrán aplicar a ofertas de empleo.
    
- Las compañías podrán crear nuevas ofertas de trabajo.

- Las compañías podrán consultar los usuarios que han solicitado.

- Las compañías podrán acceder al perfil de los usuarios que han solicitado empleo.


# Listado de Componentes e Identificación de Dónde se Cargan

Los templates se encuentran ubicados en la carpeta "/src/app/components" y se listan a continuación:

- company-job-listing-list (Ubicado en /src/app/components/company-job-listing-list)

- company-sign-in (Ubicado en /src/app/components/company-sign-in)

- company-sign-up (Ubicado en /src/app/components/company-sign-up)

- company-vacancy-list (Ubicado en /src/app/components/company-vacancy-list)

- company-vacancy-post (Ubicado en /src/app/components/company-vacancy-post)

- company-vacancy-toggle-nav (Ubicado en /src/app/components/company-vacancy-toggle-nav)

- footer (Ubicado en /src/app/components/footer)

- header-company (Ubicado en /src/app/components/company-header)

- header-job-seeker (Ubicado en /src/app/components/job-seeker-header)

- header-main-page (Ubicado en /src/app/components/main-page-header)

- header-sign-in (Ubicado en /src/app/components/sign-header)

- job-seeker-find-jobs-list (Ubicado en /src/app/components/job-seeker-find-jobs-list)

- job-seeker-profile-edit (Ubicado en /src/app/components/job-seeker-profile-edit)

- job-seeker-profile-view (Ubicado en /src/app/components/job-seeker-profile-view)

- job-seeker-search-bar (Ubicado en /src/app/components/job-seeker-search-bar)

- job-seeker-sign-in (Ubicado en /src/app/components/job-seeker-sign-in)

- job-seeker-sign-up (Ubicado en /src/app/components//job-seeker-sign-up)

- main-page (Ubicado en /src/app/components/main-page)

- main-subtitle (Ubicado en /src/app/components/main-subtitle)

- main-tittle (Ubicado en /src/app/components/main-tittle)

- vacancy-profile-edit (Ubicado en /src/app/components/vacancy-profile-edit)

- vacancy-profile-view (Ubicado en /src/app/components/vacancy-profile-view)


# Listado de Páginas del Proyecto

Las páginas están ubicadas en la carpeta “/src/app/pages” y se listan a continuación:

- Página Principal (./main-pages/) - Implementa el mockup Main page.

- Inicio Sesión Buscador de Empleo (./sign-in-job-seeker/) - Implementa el mockup Login(Job Seeker).

- Inicio Sesión Empresario (./sign-in-company/) - Implementa el mockup Login(Company)

- Registro Buscador de Empleo (./sign-up-job-seeker/) - Implementa el mockup Sign Up(Job Seeker)

- Registro Empresario (./sign-up-compnay/) - Implementa el mockup Sign Up(Company).

- Edición Perfil Buscador de Empleo (./job-seeker-profile-edit/) - Implementa el mockup Job Seeker Edit Profile (Job Seeker).

- Vista Perfil Buscador de Empleo Compañia (./job-seeker-profile-view/) - Implementa el mockup Job Seeker Profile(Company).

- Listado de Trabajos (./job-listing-company/) - Implementa el mockup Job Listing(Company)

- Listado de Plazas Disponibles(./find-jobs-job-seeker/) - Implementa el mockup Find Jobs(Job Seeker)

- Listado de Applicantes a Vacante (./vacancy-applicants-list-company/) - Implementa el mockup Vacancy applicants(Company).

- Pagina para publicar Vacantes(./vacancy-post-company/) - Implementa el mockup Post Job(Company)

- Perfil de Vacante (./vacancy-profile-edit-company/) - Implementa el mockup Vacancy View(Company)

- Listado de Vacantes-Vista Buscador de Trabajo (./vacancy-view-company/) - Implementa el mockup Vacancy View(Job Seeker)

- Página no encontrada (./page-not-found/)

# Estructura de Datos

Esta aplicación utiliza **Cloud Firestore de Firebase** como base de datos en tiempo real. A continuación, se describe la estructura y organización de los principales documentos almacenados en Firestore: **JobSeekers**, **Companies** y **Vacancies**.

---

## Colección: `jobSeekers`

Representa a los usuarios que buscan empleo.

### Ejemplo de documento:

```json
{
  "id": "9puNRwoAZkZCdcLPlfP3c70kps2",
  "fullName": "jobseeker",
  "email": "jobseeker@mail.com",
  "phoneNumber": "12345678",
  "userProfileDescription": "12",
  "portfolioLink": "",
  "otherContectMethod": "",
  "image": "/assets/jobSeekers/jobSeeker-default.jpg"
}
```

---

## Colección: `companies`

Representa a las empresas registradas que pueden publicar vacantes.

### Ejemplo de documento:

```json
{
  "id": "eRHgPpnjNuNKeNsHqlanQrHXGYC2",
  "name": "company",
  "email": "company@mail.com",
  "cifNif": "12345678",
  "image": "/assets/companies/company-default.jpg"
}
```

---

## Colección: `vacancies`

Contiene las ofertas de empleo publicadas por las empresas.

### Ejemplo de documento:

```json
{
  "id": "x0a2up",
  "name": "Limpiador",
  "description": "Que limpie cristaleras",
  "employmentSector": "Third",
  "jobType": "Full-Time",
  "minimumEducationRequired": "High School",
  "minimumSalary": 0,
  "maximumSalary": 1000,
  "dueDate": "2025-08-03",
  "postedDate": "2025-05-03",
  "stage": "Open",
  "ownerId": "eRHgPpnjNuNKeNsHqlanQrHXGYC2",
  "image": "/assets/vacancies/vacancy_default.jpg",
  "applicants": []
}
```

---

# Lanzar aplicación:

## Instalación de dependencias

```bash
npm install
```

## Ejecutar la aplicación

```bash
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200/
```

# Enlaces

Figma:

https://www.figma.com/design/TBxhHzXYyJd7nLeaRUayU4/G43.7-sean_roberto_andrea?node-id=0-1&t=97y4rc69BVzKrcs6-1

Trello JobTray en Trello:

https://trello.com/invite/b/67a102ad44ff36e81e81ba71/ATTIc48e9548c322e8417ec31bd89ca82d5f8BCAB94D/sprint1







