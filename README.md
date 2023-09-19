# cleanarsitekturJS

npm init
pertama installasi npm i standard -D fungsinya menginstall package json untuk pengembangan
# extension yang di pake standar JS (mirip exlint)
# intall npm i lint-staged -D



 M README.md
 M node_modules/.package-lock.json
 M package-lock.json
 M package.json
?? .gitignore ( ?? bukan dalam bagian kita )

A  .gitignore(sudah dalam area kita)


menambahkan di packgae jsonnya   "lint-staged": {
    "*.js": [
      "standard"
    ]
  },

  contoh casenya ketika error gunakan npx lint-staged ketuan errornya

npm install husky dan aktifkannya di package_json

husky disini itu memaksa kita saat error atau ada funcion tdk terpakai tidak bisa dipush

install jest untuk uni testing