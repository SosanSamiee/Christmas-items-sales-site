document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".request-form");

    form.addEventListener("submit", (event) => {
        // جلوگیری از ارسال پیش‌فرض فرم
        event.preventDefault(); 
        // گرفتن مقادیر ورودی‌ها
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const requestType = document.getElementById("requestType").value;
        const requestText = document.getElementById("requestText").value.trim();

        if (!firstName || !lastName || !phoneNumber) {
            alert("لطفاً تمام فیلدهای الزامی را پر کنید.");
            return;
        }

        const phoneRegex = /^[0-9]{10,14}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert("لطفاً یک شماره موبایل معتبر وارد کنید.");
            return;
        }

        if (email && !/^\S+@\S+\.\S+$/.test(email)) {
            alert("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
            return;
        }

        const requestData = {
            firstName,
            lastName,
            phoneNumber,
            email: email || "ندارد",
            requestType,
            requestText: requestText || "ندارد",
        };

        console.log("اطلاعات درخواست:", requestData);

        // نمایش پیام موفقیت
        alert("درخواست شما با موفقیت ثبت شد!");

        // پاک کردن فرم
        form.reset();
    });
});
