## Kiryl Sadko

#### Java Software Engineer at IBA Group

## Personal info and contacts

**Country:** Belarus, Minsk

**E-mail:** Kirill.beltech@gmail.com

**Contact:** +375 (29) 190-56-39

**Skype:** Kirill.beltech

## Links

**GitHub:** [Kiryl Sadko](https://github.com/Kiryl-Sadko/)

**LinkedIn:** [Kiryl Sadko](https://www.linkedin.com/in/kiryl-sadko-64a62a197/)

## Profile

Enthusiastic, highly responsible junior software engineer with a desire to
participate in the entire lifecycle of software development.

Have experience in developing software for customer from USA.
Technological stack: Java 8, Spring, JS, React, Stratus, etc.

My strengths:

- Possess great communication skills;
- Fast learner, can understand and start working with new technologies or
  frameworks;
- Always trying to delve into the issue, find out causes of the problem and
  find solutions;
- Interest in learning, desire to develop in the software field;
- Have experience in negotiations with customers from USA, Canada, India,
  Mexico, etc.

## Experience and skills

- Java
- Spring Boot, Spring Framework
- JPA, Hibernate
- Gradle, Maven
- MySQL, PostgreSQL
- Git
- JavaScript
- React
- Jira

## Code examples

```
    @Override
    public EmployeeDto update(EmployeeDto dto) {
        checkEmployeeForExistence(dto);
        validate(dto);
        Employee employee = converter.convertToEntity(dto);
        employeeDao.update(employee);
        return converter.convertToDto(employee);
    }

    private void checkEmployeeForExistence(EmployeeDto dto) {
        Long id = dto.getId();
        try {
            this.findById(id);
        } catch (Exception e) {
            String message = MessageFormat.format("Such employee id={0} not found", id);
            LOGGER.error(message);
            throw new NoSuchElementException(message);
        }
    }
```

## Employment History

**Java Software Engineer at IBA Group, Minsk**

_July 2021 - ..._

- bug fixing
- app extension

**Director at JSC "Beltechnologia & M", Minsk**

_July 2021 - May 2021_

- led the implementation of projects with customers from Mexico, USA,
  South Korea, Belarus, Russia;
- led financial and economic activities in conditions of a large debt burden
  of the enterprise;
- led the anti-crisis management of the company.

**Lead engineer at JSC "Beltechnologia & M", Minsk**

_January 2020 - July 2020_

- led the development of technology for railway screw production for
  Russian Railways.

**Engineer at JSC "Beltechnologia & M", Minsk**

_July 2014 - January 2020_

- developed and implemented technology of an aluminum suspension arm
  production for a Mercedes car at the "THK" company (Canada);
- developed and implemented technology of gearbox shafts production for
  the Daimler (Mercedes) plant in Mexico;
- developed a technology of grinding balls production for the Russian
  mining company.

## Courses

**The Complete JavaScript Course 2021: From Zero to Expert, Udemy**

_July 2021_

**The Complete React Developer Course, Udemy**

_August 2021_

**Mentoring Program (MJC-School), EPAM**

_November 2020 - June 2021_

**Java Web Development, EPAM**

_February 2020 - September 2020_

## Education

**Bachelor's, Belarussian Technical University, Minsk**

_August 2013 - July 2018_

Material science in mechanical engineering

## References

**Pavel Hryshyn from EPAM**

E-mail: grishinpavela@gmail.com

LinkedIn: [Pavel Hrushyn](https://www.linkedin.com/in/pavel-hryshyn-26028275/)

**Dzmitry Yaromka from Tango Me**

E-mail: d.yaromka@gmail.com

LinkedIn: [Dzmitry Yaromka](https://www.linkedin.com/in/dzmitry-yaromka-b0b36a19a/)

## Foreign language

English - B1

Have experience in negotiations with customers from USA, Canada, India and Mexico.
