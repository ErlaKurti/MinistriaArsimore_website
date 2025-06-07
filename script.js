
function showSection(sectionId) {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active');
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}


function populateDays(selectName) {
    const daySelect = document.querySelector(`select[name="${selectName}"]`);
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}


function populateYears(selectName) {
    const yearSelect = document.querySelector(`select[name="${selectName}"]`);
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassport(passport) {
    const passportRegex = /^[A-Z]\d{8}$/;
    return passportRegex.test(passport);
}


function validatePhone(phone) {
    const phoneRegex = /^\+355\s?\d{2}\s?\d{3}\s?\d{4}$/;
    return phoneRegex.test(phone);
}


function showError(fieldId, message) {
    const errorDiv = document.getElementById(fieldId + '-error');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
}


function hideError(fieldId) {
    const errorDiv = document.getElementById(fieldId + '-error');
    if (errorDiv) {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    }
}


function validateHigherEducationForm(formData) {
    let isValid = true;
    
    
    if (!formData.get('emri') || formData.get('emri').trim() === '') {
        showError('emri', 'Emri është i detyrueshëm');
        isValid = false;
    } else {
        hideError('emri');
    }
    
  
    if (!formData.get('mbiemri') || formData.get('mbiemri').trim() === '') {
        showError('mbiemri', 'Mbiemri është i detyrueshëm');
        isValid = false;
    } else {
        hideError('mbiemri');
    }
    
    const email = formData.get('email');
    if (!email || email.trim() === '') {
        showError('email', 'Email-i është i detyrueshëm');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Formati i email-it nuk është i saktë');
        isValid = false;
    } else {
        hideError('email');
    }
    
    
    if (!formData.get('gjinia')) {
        showError('gjinia', 'Gjinia është e detyrueshme');
        isValid = false;
    } else {
        hideError('gjinia');
    }
    
   
    if (!formData.get('dita') || !formData.get('muaji') || !formData.get('viti')) {
        showError('ditelindja', 'Ditelindja është e detyrueshme');
        isValid = false;
    } else {
        hideError('ditelindja');
    }
    
    if (!formData.get('vendlindja')) {
        showError('vendlindja', 'Vendlindja është e detyrueshme');
        isValid = false;
    } else {
        hideError('vendlindja');
    }
    
    const passport = formData.get('pasaporta');
    if (!passport || passport.trim() === '') {
        showError('pasaporta', 'Numri i pasaportës është i detyrueshëm');
        isValid = false;
    } else if (!validatePassport(passport)) {
        showError('pasaporta', 'Formati i pasaportës duhet të jetë: A12345678');
        isValid = false;
    } else {
        hideError('pasaporta');
    }
    
    
    const phone = formData.get('telefoni');
    if (!phone || phone.trim() === '') {
        showError('telefoni', 'Numri i telefonit është i detyrueshëm');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('telefoni', 'Formati i telefonit duhet të jetë: +355 67 123 4567');
        isValid = false;
    } else {
        hideError('telefoni');
    }
    
    return isValid;
}


function validateSecondaryEducationForm(formData) {
    let isValid = true;
    
   
    if (!formData.get('emri') || formData.get('emri').trim() === '') {
        showError('emri2', 'Emri është i detyrueshëm');
        isValid = false;
    } else {
        hideError('emri2');
    }
    
    
    if (!formData.get('mbiemri') || formData.get('mbiemri').trim() === '') {
        showError('mbiemri2', 'Mbiemri është i detyrueshëm');
        isValid = false;
    } else {
        hideError('mbiemri2');
    }
    
   
    const email = formData.get('email');
    if (!email || email.trim() === '') {
        showError('email2', 'Email-i është i detyrueshëm');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('email2', 'Formati i email-it nuk është i saktë');
        isValid = false;
    } else {
        hideError('email2');
    }
    
    
    if (!formData.get('gjinia2')) {
        showError('gjinia2', 'Gjinia është e detyrueshme');
        isValid = false;
    } else {
        hideError('gjinia2');
    }
    
  
    if (!formData.get('dita2') || !formData.get('muaji2') || !formData.get('viti2')) {
        showError('ditelindja2', 'Ditelindja është e detyrueshme');
        isValid = false;
    } else {
        hideError('ditelindja2');
    }
    
    
    if (!formData.get('vendlindja')) {
        showError('vendlindja2', 'Vendlindja është e detyrueshme');
        isValid = false;
    } else {
        hideError('vendlindja2');
    }
    
    
    const phone = formData.get('telefoni');
    if (!phone || phone.trim() === '') {
        showError('telefoni2', 'Numri i telefonit është i detyrueshëm');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('telefoni2', 'Formati i telefonit duhet të jetë: +355 67 123 4567');
        isValid = false;
    } else {
        hideError('telefoni2');
    }
    
   
    if (!formData.get('lenda_preferuar')) {
        showError('lenda-preferuar', 'Lënda e preferuar është e detyrueshme');
        isValid = false;
    } else {
        hideError('lenda-preferuar');
    }
    

    if (!formData.get('preferenca_lendet')) {
        showError('preferenca-lendet', 'Preferenca për lëndët është e detyrueshme');
        isValid = false;
    } else {
        hideError('preferenca-lendet');
    }
    
    return isValid;
}


function validatePrimaryEducationForm(formData) {
    let isValid = true;
    
   
    if (!formData.get('emri_prindi') || formData.get('emri_prindi').trim() === '') {
        showError('emri-prindi', 'Emri i prindit është i detyrueshëm');
        isValid = false;
    } else {
        hideError('emri-prindi');
    }
    
    
    if (!formData.get('mbiemri_prindi') || formData.get('mbiemri_prindi').trim() === '') {
        showError('mbiemri-prindi', 'Mbiemri është i detyrueshëm');
        isValid = false;
    } else {
        hideError('mbiemri-prindi');
    }
    
    
    if (!formData.get('emri_femije') || formData.get('emri_femije').trim() === '') {
        showError('emri-femije', 'Emri i fëmijës është i detyrueshëm');
        isValid = false;
    } else {
        hideError('emri-femije');
    }
    
   
    const klasa = parseInt(formData.get('klasa'));
    if (!formData.get('klasa') || isNaN(klasa) || klasa < 1 || klasa > 9) {
        showError('klasa', 'Klasa duhet të jetë një numër nga 1 deri në 9');
        isValid = false;
    } else {
        hideError('klasa');
    }
   
    if (!formData.get('cilesia_teksteve') || formData.get('cilesia_teksteve').trim() === '') {
        showError('cilesia-teksteve', 'Mendimi për cilësinë e teksteve është i detyrueshëm');
        isValid = false;
    } else {
        hideError('cilesia-teksteve');
    }
    
    
    if (!formData.get('mjedisi_shkolla') || formData.get('mjedisi_shkolla').trim() === '') {
        showError('mjedisi-shkolla', 'Mendimi për mjedisin e shkollës është i detyrueshëm');
        isValid = false;
    } else {
        hideError('mjedisi-shkolla');
    }
    
    return isValid;
}


document.addEventListener('DOMContentLoaded', function() {
   
    populateDays('dita');
    populateYears('viti');
    populateDays('dita2');
    populateYears('viti2');
    
    const higherEducationForm = document.getElementById('higher-education-form');
    if (higherEducationForm) {
        higherEducationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            if (validateHigherEducationForm(formData)) {
               
                this.style.display = 'none';
                document.getElementById('higher-education-success').style.display = 'block';
                
               
                console.log('Arsimi i Lartë - Të dhënat e formës:', Object.fromEntries(formData));
                
             
                setTimeout(() => {
                    this.reset();
                    this.style.display = 'block';
                    document.getElementById('higher-education-success').style.display = 'none';
                }, 3000);
            }
        });
    }
    
    // Event listener për formën e arsimit të mesëm
    const secondaryEducationForm = document.getElementById('secondary-education-form');
    if (secondaryEducationForm) {
        secondaryEducationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            if (validateSecondaryEducationForm(formData)) {
                // Fsheh formën dhe shfaq mesazhin e suksesit
                this.style.display = 'none';
                document.getElementById('secondary-education-success').style.display = 'block';
                
                // Log të dhënat (mund të dërgohen në server)
                console.log('Arsimi i Mesëm - Të dhënat e formës:', Object.fromEntries(formData));
                
                // Reset forma pas 3 sekondash
                setTimeout(() => {
                    this.reset();
                    this.style.display = 'block';
                    document.getElementById('secondary-education-success').style.display = 'none';
                }, 3000);
            }
        });
    }

    const primaryEducationForm = document.getElementById('primary-education-form');
    if (primaryEducationForm) {
        primaryEducationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            
            if (validatePrimaryEducationForm(formData)) {
          
                this.style.display = 'none';
                document.getElementById('primary-education-success').style.display = 'block';
                
                
                console.log('Arsimi Bazë - Të dhënat e formës:', Object.fromEntries(formData));
                
               
                setTimeout(() => {
                    this.reset();
                    this.style.display = 'block';
                    document.getElementById('primary-education-success').style.display = 'none';
                }, 3000);
            }
        });
    }
    
   
    document.querySelectorAll('input[type="email"]').forEach(emailInput => {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            const fieldId = this.id;
            
            if (email && !validateEmail(email)) {
                showError(fieldId, 'Formati i email-it nuk është i saktë');
            } else {
                hideError(fieldId);
            }
        });
    });
    
 
    const passportInput = document.getElementById('pasaporta');
    if (passportInput) {
        passportInput.addEventListener('input', function() {
            this.value = this.value.toUpperCase(); 
        });
        
        passportInput.addEventListener('blur', function() {
            const passport = this.value.trim();
            
            if (passport && !validatePassport(passport)) {
                showError('pasaporta', 'Formati i pasaportës duhet të jetë: A12345678');
            } else {
                hideError('pasaporta');
            }
        });
    }
    
    document.querySelectorAll('input[type="tel"]').forEach(phoneInput => {
        phoneInput.addEventListener('blur', function() {
            const phone = this.value.trim();
            const fieldId = this.id;
            
            if (phone && !validatePhone(phone)) {
                showError(fieldId, 'Formati i telefonit duhet të jetë: +355 67 123 4567');
            } else {
                hideError(fieldId);
            }
        });
    });
    
   
    const klasaInput = document.getElementById('klasa');
    if (klasaInput) {
        klasaInput.addEventListener('input', function() {
            const klasa = parseInt(this.value);
            
            if (this.value && (isNaN(klasa) || klasa < 1 || klasa > 9)) {
                showError('klasa', 'Klasa duhet të jetë një numër nga 1 deri në 9');
            } else {
                hideError('klasa');
            }
        });
    }
    
   
    document.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                hideError(this.id || this.name);
            }
        });
    });
});


function isRadioSelected(name) {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
    return Array.from(radios).some(radio => radio.checked);
}


function clearAllErrors() {
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(errorDiv => {
        errorDiv.textContent = '';
        errorDiv.style.display = 'none';
    });
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function showSectionSmooth(sectionId) {
    showSection(sectionId);
    scrollToTop();
}