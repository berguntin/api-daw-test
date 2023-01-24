This project was made for learning purposes. Provides a API for getting data from mongodb Database. 
The data consist in a serie of quizzes of various subjects form spanish Web Development Certificate of Higher Education

Data is consumed by other app live on http://cuestionariosdaw.atwebpages.com/

Is my first Full Stack proyect, and it could be full of mistakes, I appreciate any suggestions of how I can improve the code.



REQUESTS:

-------- GET REQUESTS --------

/ home page

/api/quizzies -> return all quizzes

/api/subjects -> return a list of subject availables.

/api/:subject -> return a list of teaching units availables for subject

/api/:subject/:ud -> return a list of available test for subject and teaching unit

/api/quizzies/:subject/:ud -> return all quizzes for certain subject and teaching unit (ud:Number). Example /api/quizzies/DWES/3

/api/quizzies/:subject/:ud/:ra -> return one quiz. ra is learning requirement (requisito de aprendizaje). Example /api/quizzies/DIW/3/RA03_B)




