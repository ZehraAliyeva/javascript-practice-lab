
/**
 * ============================================================
 * TASK 01 — PERSONAL INFORMATION SYSTEM
 * LEVEL: EASY
 * TIME: 10–15 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * Variables, Data Types, Number(), typeof, Arithmetic Operators
 *
 * TAPŞIRIQ:
 * İstifadəçinin şəxsi məlumatlarını emal edən proqram yazın.
 * Funksiya ad, yaş və şəhər məlumatlarını parametr kimi qəbul
 * etməli və hesablanmış nəticələri obyekt şəklində qaytarmalıdır.
 *
 * TƏLƏBLƏR:
 * 1. name, age və city parametrlərini qəbul edin.
 * 2. age dəyərini Number() vasitəsilə ədədə çevirin.
 * 3. İstifadəçinin 5 il sonrakı yaşını hesablayın.
 * 4. name və age dəyişənlərinin data type-larını typeof ilə tapın.
 * 5. Bütün nəticələri return vasitəsilə obyekt kimi qaytarın.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * Input: ("Ali", "20", "Baku")
 *
 * {
 *   name: "Ali",
 *   age: 20,
 *   city: "Baku",
 *   ageAfter5Years: 25,
 *   nameType: "string",
 *   ageType: "number"
 * }
 *
 * BONUS:
 * Ad boş daxil edildikdə xəbərdarlıq nəticəsi qaytarın.
 *
 * QAYDALAR:
 * - prompt(), alert() və console.log() istifadə etməyin.
 * - Məlumatları funksiya parametrlərindən alın.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function personalInfo(name, age, city) {
    if (name === undefined || name === null || name === "") {
        return ("Ad boş ola bilməz.");
    }

    const ageNum = Number(age);

    return {
        name: name,
        age: ageNum,
        city: city,
        ageAfter5Years: ageNum + 5,
        nameType: typeof name,
        ageType: typeof ageNum
    };
}

module.exports = { personalInfo };

