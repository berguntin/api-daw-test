REQUESTS

/api/subjects -> return a list of subject availables.

/api/:subject -> return a list of teaching units availables for subject

/api/quizzies -> return all quizzes in bd as JSON

/api/quizzies/:subject -> return all quizzes for subject. Example: /api/quizzies/DAW

/api/quizzies/:subject/:ud -> return all quizzes for certain subject and teaching unit (ud:Number). Example /api/quizzies/DWES/3

/api/quizzies/:subject/:ud/:ra -> return one quiz. ra is learning requirement (requisito de aprendizaje). Example /api/quizzies/DIW/3/RA03_B)