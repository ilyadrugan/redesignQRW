import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

i18n.translations = {
    
    ru: { 
        nameOfqr: "Название QR-кода",
        newqr: "Новый QR-код",
        tutorial1:"Нажмите на плюс, чтобы добавить QR-код",
        tutorial2:"Нажмите на подпись, чтобы отредактировать",
        tutorial3:"Свайпай, чтобы переключаться между QR-кодами",
        addqr: "Добавить QR-код",
        addPhoto: "Сделать фото",
        addGal: "Выбрать фото из галереи",
        delqr: "Вы уверены, что хотите удалить этот QR-код?",
        yesDel:"Да, удалить",
        noDel:"Нет, оставить",
    },

    en: { 
        nameOfqr: "QR-code name",
        newqr: "New QR-code",
        tutorial1:"Click on the plus to add QR-code",
        tutorial2:"Click on the name of QR-code to edit",
        tutorial3:"Swipe to switch between QR-codes",
        addqr: "Add QR-code",
        addPhoto: "Make photo",
        addGal: "Choose photo from gallery",
        delqr: "Are you sure you want to delete this code?",
        yesDel:"Yes, delete",
        noDel:"No, save", 
    },
  };
// Set the locale once at the beginning of your app.
const local = Localization.locale;
if (local!="ru-RU")
{
    i18n.locale = "en";
} 
else
{
    i18n.locale = local;
}


i18n.fallbacks = true;

export default i18n;