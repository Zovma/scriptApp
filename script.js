const express = require("express");
const path = require('path');
const app = express();
const sendScript = require("./sendScript.js");
const jsonParser = express.json();
const XlsxPopulate = require('xlsx-populate');
const fs = require('fs');

// app.use(express.static(path.join(__dirname, 'build')));

app.get("/script", function (request, response) {
  response.sendFile(__dirname + "./client/build/index.html");
});

app.get('/client/build/static/css/main.c3ad2097.chunk.css', function (request, response) {
  response.sendFile(__dirname + "./client/build/static/css/main.c3ad2097.chunk.css");
});

app.get('/client/build/static/js/1.a3c0bc64.chunk.js', function (request, response) {
  response.sendFile(__dirname + "./client/build/static/js/1.a3c0bc64.chunk.js");
});

app.get('/client/build/static/js/main.e52975e3.chunk.js', function (request, response) {
  response.sendFile(__dirname + "./client/build/static/js/main.e52975e3.chunk.js");
});

app.post("/dataScript", jsonParser, function (request, response) {
  console.log('Пришёл post');
  if (!request.body) return response.sendStatus(400);
  response.json(request.body); // отправляем пришедший ответ обратно
  const dataScript = request.body;
  // console.log(dataScript);
  createSample(dataScript);

});


function createSample(dataScript) {
  // console.log(dataScript.sample);
  switch (dataScript.sample) {
    case 'definitionNeed':
      definitionNeed(dataScript)
      break;
    case 'selectionSaleProduct':
      selectionSaleProduct(dataScript)
      break;
    case 'sendingCommercialOffer':
      sendingCommercialOffer(dataScript)
      break;
    case 'useMitingPickUpOfflineOurOffice':
      useMitingPickUpOfflineOurOffice(dataScript)
      break;
    case 'useMitingPickUpOfflineСlientOffice':
      useMitingPickUpOfflineСlientOffice(dataScript)
      break;
    case 'useMitingPickUpOfflineNoMatterWhere':
      useMitingPickUpOfflineNoMatterWhere(dataScript)
      break;
    case 'useMitingPickUpOnline':
      useMitingPickUpOnline(dataScript)
      break;
    case 'useMitingPickUpNoMatterWhere':
      useMitingPickUpNoMatterWhere(dataScript)
      break;
    case 'useMitingProductPresentationOfflineOurOffice':
      useMitingProductPresentationOfflineOurOffice(dataScript)
      break;
    case 'useMitingProductPresentationOfflineClientOffice':
      useMitingProductPresentationOfflineClientOffice(dataScript)
      break;
    case 'useMitingProductPresentationOfflineNoMatterWhere':
      useMitingProductPresentationOfflineNoMatterWhere(dataScript)
      break;
    case 'useMitingProductPresentationOnline':
      useMitingProductPresentationOnline(dataScript)
      break;
    case 'useMitingProductPresentationNoMatterWhere':
      useMitingProductPresentationNoMatterWhere(dataScript)
      break;
    default:
      console.log('default')
      break;
  }
}


function definitionNeed(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяГотовности%+/g, match => dataScript.readyTime)
      workbook.find(/%ВремяРазговора%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
  sendScript(dataScript.mail, dataScript.title)
    // fs.unlink(`/script/*.xlsx`, function(){})
}

function selectionSaleProduct(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ЭтапыОформления%+/g, match => dataScript.stagesOfRegistration)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
  sendScript(dataScript.mail, dataScript.title)
}

function sendingCommercialOffer(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}

function useMitingPickUpOfflineOurOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Адрес%+/g, match => dataScript.officeAdress)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)

}

function useMitingPickUpOfflineСlientOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)

}

function useMitingPickUpOfflineNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)

}

function useMitingPickUpOnline(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ПриложениеДляСвязи%+/g, match => dataScript.communicationApp)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}


function useMitingPickUpNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}

function useMitingProductPresentationOfflineOurOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%Адрес%+/g, match => dataScript.officeAdress)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}

function useMitingProductPresentationOfflineClientOffice(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}

function useMitingProductPresentationOfflineNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}

function useMitingProductPresentationOnline(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ПриложениеДляСвязи%+/g, match => dataScript.communicationApp)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}


function useMitingProductPresentationNoMatterWhere(dataScript) {
  XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
    .then(workbook => {
      workbook.find(/%Должность%+/gm, match => dataScript.position)
      workbook.find(/%Форма%+/g, match => dataScript.form)
      workbook.find(/%Название%+/g, match => dataScript.title)
      workbook.find(/%Деятельность%+/g, match => dataScript.activity)
      workbook.find(/%Потребность%+/g, match => dataScript.need)
      workbook.find(/%ВремяНаВстречу%+/g, match => dataScript.meetingTime)
      return workbook.toFileAsync(`./readySimple/${dataScript.title}.xlsx`);
    });
    sendScript(dataScript.mail, dataScript.title)
}





app.listen(3001);