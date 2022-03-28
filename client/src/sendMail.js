import { dataScript } from "./App";
const nodemailer = require('nodemailer')
const XlsxPopulate = require('xlsx-populate');
// const fs = require('../fs');


// let testEmailAccount = await nodemailer.createTestAccount()


function sendScript(mail, nameScript) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'eexa44ple@yandex.ru',
      pass: '6626553000',
    },
  })

  transporter.sendMail({
    from: 'Скрипт продаж <eexa44ple@yandex.ru>',
    to: mail,
    subject: 'Готовый скрипт продаж',
    text: 'Скрипт готов!',
    // html:
    //   "<p>",
    attachments: [{
      filename: `${nameScript}.xlsx`,
      path: `../readySimple/${nameScript}.xlsx`
    }
    ],
  })
}



export function createSample() {
    console.log(dataScript.sample);
    switch (dataScript.sample) {
      case 'definitionNeed':
        definitionNeed()
        break;
    //   case 'selectionSaleProduct':
    //     selectionSaleProduct(dataScript)
    //     break;
    //   case 'sendingCommercialOffer':
    //     sendingCommercialOffer(dataScript)
    //     break;
    //   case 'useMitingPickUpOfflineOurOffice':
    //     useMitingPickUpOfflineOurOffice(dataScript)
    //     break;
    //   case 'useMitingPickUpOfflineСlientOffice':
    //     useMitingPickUpOfflineСlientOffice(dataScript)
    //     break;
    //   case 'useMitingPickUpOfflineNoMatterWhere':
    //     useMitingPickUpOfflineNoMatterWhere(dataScript)
    //     break;
    //   case 'useMitingPickUpOnline':
    //     useMitingPickUpOnline(dataScript)
    //     break;
    //   case 'useMitingPickUpNoMatterWhere':
    //     useMitingPickUpNoMatterWhere(dataScript)
    //     break;
    //   case 'useMitingProductPresentationOfflineOurOffice':
    //     useMitingProductPresentationOfflineOurOffice(dataScript)
    //     break;
    //   case 'useMitingProductPresentationOfflineClientOffice':
    //     useMitingProductPresentationOfflineClientOffice(dataScript)
    //     break;
    //   case 'useMitingProductPresentationOfflineNoMatterWhere':
    //     useMitingProductPresentationOfflineNoMatterWhere(dataScript)
    //     break;
    //   case 'useMitingProductPresentationOnline':
    //     useMitingProductPresentationOnline(dataScript)
    //     break;
    //   case 'useMitingProductPresentationNoMatterWhere':
    //     useMitingProductPresentationNoMatterWhere(dataScript)
    //     break;
      default:
        console.log('default')
        break;
    }
  }
  
  
  function definitionNeed(dataScript) {
    XlsxPopulate.fromFileAsync(`../simple/${dataScript.sample}.xlsx`)
      .then(workbook => {
        workbook.find(/%Должность%+/gm, match => dataScript.position)
        workbook.find(/%Форма%+/g, match => dataScript.form)
        workbook.find(/%Название%+/g, match => dataScript.title)
        workbook.find(/%Деятельность%+/g, match => dataScript.activity)
        workbook.find(/%Потребность%+/g, match => dataScript.need)
        workbook.find(/%ВремяГотовности%+/g, match => dataScript.readyTime)
        workbook.find(/%ВремяРазговора%+/g, match => dataScript.meetingTime)
        return workbook.toFileAsync(`../readySimple/${dataScript.title}.xlsx`);
      });
    sendScript(dataScript.mail, dataScript.title)
      // fs.unlink(`/script/*.xlsx`, function(){})
  }
  
//   function selectionSaleProduct(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
//         workbook.find(/%ЭтапыОформления%+/g, match => dataScript.result[3][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function sendingCommercialOffer(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[3][0])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingPickUpOfflineOurOffice(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Адрес%+/g, match => dataScript.result[6][0])
//         workbook.find(/%Время%+/g, match => dataScript.result[6][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
  
//   }
  
//   function useMitingPickUpOfflineСlientOffice(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Время%+/g, match => dataScript.result[6][0])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
  
//   }
  
//   function useMitingPickUpOfflineNoMatterWhere(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Время%+/g, match => dataScript.result[6][0])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
  
//   }
  
//   function useMitingPickUpOnline(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Связь%+/g, match => dataScript.result[6][0])
//         workbook.find(/%Время%+/g, match => dataScript.result[6][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
  
//   function useMitingPickUpNoMatterWhere(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Время%+/g, match => dataScript.result[6][0])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingProductPresentationOfflineOurOffice(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[6][0])
//         workbook.find(/%Адрес%+/g, match => dataScript.result[6][1])
//         workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[6][2])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingProductPresentationOfflineClientOffice(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[6][0])
//         workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[6][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingProductPresentationOfflineNoMatterWhere(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[6][0])
//         workbook.find(/%Связь%+/g, match => dataScript.result[6][1])
//         workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[6][2])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingProductPresentationOnline(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[6][0])
//         workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[6][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }
  
//   function useMitingProductPresentationNoMatterWhere(dataScript) {
//     XlsxPopulate.fromFileAsync(`./simple/${dataScript.sample}.xlsx`)
//       .then(workbook => {
//         workbook.find(/%Должность%+/gm, match => dataScript.result[1][0])
//         workbook.find(/%Форма%+/g, match => dataScript.result[1][1])
//         workbook.find(/%Название%+/g, match => dataScript.result[1][2])
//         workbook.find(/%Деятельность%+/g, match => dataScript.result[2][0])
//         workbook.find(/%Потребность%+/g, match => dataScript.result[5][0])
//         workbook.find(/%ВремяРазговора%+/g, match => dataScript.result[5][1])
//         return workbook.toFileAsync(`./readySimple/${dataScript.result[1][2]}.xlsx`);
//       });
//     sendScript(dataScript.result[0][0], dataScript.result[1][2])
//   }