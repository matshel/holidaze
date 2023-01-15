# Project exam 2

![image](https://github.com/matshel/holidaze/blob/main/public/images/holidaze.png)

## Strapi authenticated user credentials for sensor:

User: mats

Password: mats1234

NB! Heroku do no longer host the backend.

## Description

A local tourism agency in Bergen is launching a new website called ‘Holidaze’ for visitors to the area to be able to find hotels, B&Bs and guesthouses, and for the accommodation owners to receive enquiries.

The project contains a visitor side of the website where users can search accommodation and make enquiries, as well as the administration side where properties can be added and enquiries managed.

There is created an API to store the data for the establishments, enquiries and contact submissions. This is done using Strapi as a CMS.

### Visitor side:

- Home page
- Search bar "typeahead" (auto dropdown to match the places)
- A results page with the searched place
- A list of products on a dedicated page
- Dedicated details page for each place
- A contact form that sends a message and which can be viewed on the admin side.
- An enquiry page
- A contact page (different to enquiry page) which goes to the admin for Holidaze

### Admin side:

- Login section that makes use of JWT tokens
- List of enquiries and new enquiries appear when user submits the form on the enquiry page
- List of messages from the contact form
- The admin can create a new establishment

## Built With

- [Next.js](https://nextjs.org/)
- CSS Modules

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone https://github.com/matshel/holidaze.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

Feedback from student

## Contact

mats.helgesen@protonmail.com
