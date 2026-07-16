console.log("🚀 JS cargado");
// Data management using static array
let archivos = [
  {
    id: 1,
    title: "Arquitectura de Base de Datos",
    desc: "Aqui descrbe sobre el concepto, las arquitecturas, comparacion y analisis y recomendaciones",
    data: "./archivos/INFORME_TÉCNICO.pdf",
    type: "pdf",
    week: 1,
    fileName: "INFORME_TÉCNICO.pdf"
  },
  {
    id: 2,
    title: "Cuadro Comparativo de Análisis Técnico de DBMS",
    desc: "Tipo de DBMS",
    data: "./archivos/CUADRO_COMPARATIVO.pdf",
    type: "pdf",
    week: 2,
    fileName: "CUADRO_COMPARATIVO.pdf"
  },
  {
    id: 3,
    title: "Instalación de SQL",
    desc: "Aqui te enseñara de como instalar el SQL Server adecuada mente",
    data: "./archivos/Instalación_SQL.pdf",
    type: "pdf",
    week: 2,
    fileName: "Instalación_SQL.pdf"
  },
  {
    id: 4,
    title: "Modelo Entidad Relación",
    desc: "Ejercicios de el Modelo Entidad Relacion desarrollados",
    data: "./archivos/Modelo_Entidad_Relación.pdf",
    type: "pdf",
    week: 2,
    fileName: "Modelo_Entidad_Relación.pdf"
  },
  {
    id: 5,
    title: "ENTIDAD RELACION",
    desc: "Ejercicios de Entidad Relacion",
    data: "./archivos/ENTIDAD_RELACION.pdf",
    type: "pdf",
    week: 3,
    fileName: "ENTIDAD_RELACION.pdf"
  },
  {
    id: 6,
    title: "Resumen",
    desc: "Aqui te mostrara el resumen de la clase de la semana 3 que trata sobre arquitecturas de Base de datos y su relacion con los Requisitos del Sistema",
    data: "./archivos/Resumen.pdf",
    type: "pdf",
    week: 3,
    fileName: "Resumen.pdf"
  },
  {
    id: 7,
    title: "Resumen",
    desc: "Aqui te mostrara el resumen de la semana 4 que trata de proceso integral de sistemas de base de datos",
    data: "./archivos/Resumen4.png",
    type: "image",
    week: 4,
    fileName: "Resumen4.png"
  },

   {
    id: 8,
    title: "Boleta",
    desc: "Aqui esta la boleta escaneada",
    data: "./archivos/Boleta.pdf",
    type: "pdf",
    week: 4,
    fileName: "Boleta.pdf"
  },

  {
    id: 9,
    title: "Relacion No Normalizada",
    desc: "",
    data: "./archivos/imagen1.png",
    type: "image",
    week: 4,
    fileName: "imagen1.png"
  },
   {
    id: 10,
    title: "Primera Forma Normal",
    desc: "",
    data: "./archivos/imagen2.png",
    type: "image",
    week: 4,
    fileName: "imagen2.png"
  },
   {
    id: 11,
    title: "Segunda Forma Normal",
    desc: "",
    data: "./archivos/imagen3.png",
    type: "image",
    week: 4,
    fileName: "imagen3.png"
  },
   {
    id: 12,
    title: "Tercera Froma Normal",
    desc: "",
    data: "./archivos/imagen4.png",
    type: "image",
    week: 4,
    fileName: "imagen4.png"
  },
   {
    id: 13,
    title: "Tarjeta de presentacion",
    desc: "",
    data: "./archivos/1.png",
    type: "imagen",
    week: 2,
    fileName: "1.png"
  },
  {
    id: 14,
    title: "Tarjeta de presentacion",
    desc: "",
    data: "./archivos/2.png",
    type: "imagen",
    week: 2,
    fileName: "2.png"
  },
  {
    id: 15,
    title: "Resumen de la semana 5",
    desc: "",
    data: "./archivos/Resumen5.png",
    type: "image",
    week: 5,
    fileName: "Resumen5.png"
  },
   {
    id: 16,
    title: "Relacion No Normalizada",
    desc: "",
    data: "./archivos/Normal.jpeg",
    type: "image",
    week: 5,
    fileName: "Normal.jpeg"
  },
  {
    id: 17,
    title: "Primera Forma Normal",
    desc: "",
    data: "./archivos/Froma_Normal_1.jpeg",
    type: "image",
    week: 5,
    fileName: "Froma_Normal_1.jpeg"
  },
  {
    id: 18,
    title: "Segunda Forma Normal",
    desc: "",
    data: "./archivos/Froma_Normal_2.jpeg",
    type: "image",
    week: 5,
    fileName: "Froma_Normal_2.jpeg"
  },
   {
    id: 19,
    title: "Tercera Forma Normal",
    desc: "",
    data: "./archivos/Froma_Normal_3.jpeg",
    type: "image",
    week: 5,
    fileName: "Froma_Normal_3.jpeg"
  },
  {
    id: 20,
    title: "Resumen semana 6",
    desc: "",
    data: "./archivos/Resumen6.png",
    type: "image",
    week: 6,
    fileName: "Resumen6.png"
  },
  {
    id: 21,
    title: "Script SQL",
    desc: "",
    data: "./archivos/Script_SQL.pdf",
    type: "pdf",
    week: 6,
    fileName: "Script_SQL.pdf"
  },
   {
    id: 22,
    title: "CONSULTAS BASICAS EN SQL",
    desc: "",
    data: "./archivos/CONSULTAS_BASICAS_EN_SQL.pdf",
    type: "pdf",
    week: 7,
    fileName: "CONSULTAS_BASICAS_EN_SQL.pdf"
  },
   {
    id: 27,
    title: "Resumen semana 7",
    desc: "",
    data: "./archivos/Resumen7.pdf",
    type: "pdf",
    week: 7,
    fileName: "Resumen7.pdf"
  },
  {
    id: 28,
    title: "Resumen semana 8",
    desc: "",
    data: "./archivos/Resuemen8.pdf",
    type: "pdf",
    week: 8,
    fileName: "Resuemen8.pdf"
  },
  {
    id: 29,
    title: "INFOGRAFIA SQL 1-15",
    desc: "",
    data: "./archivos/SQL_Diagnostico.pdf",
    type: "pdf",
    week: 7,
    fileName: "SQL_Diagnostico.pdf"
  },
  {
    id: 30,
    title: "INFOGRAFIA SQL 16-30",
    desc: "",
    data: "./archivos/SQL_DIAGNOSTICO2.pdf",
    type: "pdf",
    week: 7,
    fileName: "SQL_DIAGNOSTICO2.pdf"
  },
  {
    id: 31,
    title: "INFOGRAFIA",
    desc: "",
    data: "./archivos/Infografias_Actividad2.pdf",
    type: "pdf",
    week: 9,
    fileName: "Infografias_Actividad2.pdf"
  },
  {
    id: 32,
    title: "REGLAMENTO GENERAL DE GRADOS Y TÍTULOS DE PREGRADO",
    desc: "",
    data: "./archivos/Reglamento_generales_de_grado.pdf",
    type: "pdf",
    week: 9,
    fileName: "Reglamento_generales_de_grado.pdf"
  },
  {
    id: 33,
    title: "Manual De Como Crear Cuenta En Azure",
    desc: "",
    data: "./archivos/Manual_de_Azure.pdf",
    type: "pdf",
    week: 10,
    fileName: "Manual_de_Azure.pdf"
  },
  {
    id: 34,
    title: "Infografias de los temas de la semana 10",
    desc: "",
    data: "./archivos/Infografias_sem10.pdf",
    type: "pdf",
    week: 10,
    fileName: "Infografias_sem10.pdf"
  },
   {
    id: 35,
    title: "Infografias de los temas de la semana 11",
    desc: "",
    data: "./archivos/Inforgrafias_sem11.pdf",
    type: "pdf",
    week: 11,
    fileName: "Inforgrafias_sem11.pdf"
  },
  {
    id: 36,
    title: "Infografias de los temas de la semana 12",
    desc: "",
    data: "./archivos/Infografia_sem12.pdf",
    type: "pdf",
    week: 12,
    fileName: "Infografia_sem12.pdf"
  },
  {
    id: 37,
    title: "Ejercicios Resueltos semana 10",
    desc: "",
    data: "./archivos/Ejercicios_Resueltos_sem10.pdf",
    type: "pdf",
    week: 10,
    fileName: "Ejercicios_Resueltos_sem10.pdf"
  },
  {
    id: 38,
    title: "Ejercicios Resueltos semana 11",
    desc: "",
    data: "./archivos/Ejercicios_Resueltos_sem11.pdf",
    type: "pdf",
    week: 11,
    fileName: "Ejercicios_Resueltos_sem11.pdf"
  },
   {
    id: 39,
    title: "Ejercicios Resueltos semana 12",
    desc: "",
    data: "./archivos/ejercicios_Resueltos_sem12.pdf",
    type: "pdf",
    week: 12,
    fileName: "ejercicios_Resueltos_sem12.pdf"
  },
   {
    id: 40,
    title: "Infografia semana 14 ",
    desc: "",
    data: "./archivos/Infografia_semana_14.pdf",
    type: "pdf",
    week: 14,
    fileName: "Infografia_semana_14.pdf"
  },
   {
    id: 41,
    title: "Infografia semana 13 ",
    desc: "",
    data: "./archivos/Infografias_semana_13.pdf",
    type: "pdf",
    week: 13,
    fileName: "Infografias_semana_13.pdf"
  },
  {
    id: 42,
    title: "Ejercicios Resueltos semana 13 ",
    desc: "",
    data: "./archivos/ejercicios_Resueltos_sem13.pdf",
    type: "pdf",
    week: 13,
    fileName: "ejercicios_Resueltos_sem13.pdf"
  },
  {
    id: 43,
    title: "Ejercicios Resueltos semana 14 ",
    desc: "",
    data: "./archivos/ejercicios_Resueltos_sem14.pdf",
    type: "pdf",
    week: 14,
    fileName: "ejercicios_Resueltos_sem14.pdf"
  },
  {
    id: 44,
    title: "Cuestionario Respondido Semana 13 ",
    desc: "",
    data: "./archivos/cuestionario_respondido_sema13.pdf",
    type: "pdf",
    week: 13,
    fileName: "cuestionario_respondido_sema13.pdf"
  },
  {
    id: 45,
    title: "Capitulo 1 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo1.pdf",
    type: "pdf",
    week: 15,
    fileName: "Capitulo1.pdf"
  },
   {
    id: 46,
    title: "Capitulo 2 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo2.pdf",
    type: "pdf",
    week: 15,
    fileName: "Capitulo2.pdf"
  },
   {
    id: 47,
    title: "Capitulo 3 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo3.pdf",
    type: "pdf",
    week: 15,
    fileName: "Capitulo3.pdf"
  },
  {
    id: 48,
    title: "Capitulo 4 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo4.pdf",
    type: "pdf",
    week: 15,
    fileName: "Capitulo4.pdf"
  },
  {
    id: 49,
    title: "Capitulo 5 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo5.pdf",
    type: "pdf",
    week: 16,
    fileName: "Capitulo5.pdf"
  },
  {
    id: 50,
    title: "Capitulo 6 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo6.pdf",
    type: "pdf",
    week: 16,
    fileName: "Capitulo6.pdf"
  },
   {
    id: 51,
    title: "Capitulo 7 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo7.pdf",
    type: "pdf",
    week: 16,
    fileName: "Capitulo7.pdf"
  },
   {
    id: 52,
    title: "Capitulo 8 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo8.pdf",
    type: "pdf",
    week: 16,
    fileName: "Capitulo8.pdf"
  },
  {
    id: 53,
    title: "Capitulo 9 y Cuestionario con respuestas",
    desc: "",
    data: "./archivos/Capitulo9.pdf",
    type: "pdf",
    week: 16,
    fileName: "Capitulo9.pdf"
  },




];
const getFiles = () => archivos;
const saveFiles = (files) => {
  archivos = files;
  console.log("Cambios guardados temporalmente en memoria. Para que los cambios sean permanentes, debes modificar el array 'archivos' en script.js.");
};

// Global UI Elements
window.addEventListener('load', () => {
  const loader = document.getElementById('pageLoader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      setTimeout(() => loader.remove(), 600);
    }, 600);
  }

  // Inicializar Intersection Observer para animaciones al scrollear
  const animateElements = document.querySelectorAll('.hidden-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateElements.forEach(el => observer.observe(el));

  // Ripple Effect Initialization
  initRippleEffect();
});

function initRippleEffect() {
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    const rect = btn.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const existingRipple = btn.querySelector('.ripple');
    if (existingRipple) {
      existingRipple.remove();
    }

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
}

// Navbar Blur on Scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) {
    if (window.scrollY > 50) nav.classList.add('navbar-scrolled');
    else nav.classList.remove('navbar-scrolled');
  }
});

// Toast Notifications
window.showToast = function (message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = type === 'success' ? `<i class="fas fa-check-circle" style="color: var(--success-color); font-size: 1.2rem;"></i> <span style="font-weight: 500;">${message}</span>` : `<i class="fas fa-exclamation-circle" style="color: var(--danger-color); font-size: 1.2rem;"></i> <span style="font-weight: 500;">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'fadeOutRight 0.3s forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
};

// Lightbox / Modal Visualizer
window.viewMedia = function (url, type) {
  const modal = document.getElementById('lightboxModal');
  const content = document.getElementById('lightboxContent');
  if (!modal || !content) {
    // Fallback si no existe el modal
    window.open(url, '_blank');
    return;
  }
  content.innerHTML = '';
  if (type === 'image') {
    content.innerHTML = `<img src="${url}" style="max-width:100%; max-height:100%; border-radius:8px; object-fit:contain; animation: fadeIn 0.3s ease;">`;
  } else {
    content.innerHTML = `<iframe src="${url}" style="width:100%; height:100%; min-height: 500px; border:none; border-radius:8px; animation: fadeIn 0.3s ease;"></iframe>`;
  }
  modal.classList.add('active');
};

window.closeModal = function () {
  const modal = document.getElementById('lightboxModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      document.getElementById('lightboxContent').innerHTML = '';
    }, 300);
  }
};

// Cierre de modal al hacer clic fuera del contenido
document.addEventListener('click', (e) => {
  const modal = document.getElementById('lightboxModal');
  if (modal && modal.classList.contains('active') && e.target === modal) {
    closeModal();
  }
});

// Original openFile as fallback / download
window.openFile = function (dataUrl, fileName) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Login Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const errorMsg = document.getElementById('errorMsg');

    if (user === 'admin' && pass === '1234') {
      localStorage.setItem('portafolio_auth', 'true');
      window.location.href = './admin.html';
    } else {
      errorMsg.style.display = 'block';
      loginForm.style.transform = 'translateX(10px)';
      setTimeout(() => loginForm.style.transform = 'translateX(-10px)', 100);
      setTimeout(() => loginForm.style.transform = 'translateX(0)', 200);
    }
  });
}

// Admin Protection and Logic
if (window.location.pathname.includes('admin.html')) {
  if (localStorage.getItem('portafolio_auth') !== 'true') {
    window.location.href = './login.html';
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('portafolio_auth');
      window.location.href = './index.html';
    });
  }

  let editingId = null;
  let fileToDelete = null;

  // Handle Form Upload & Edit
  const adminForm = document.getElementById('adminForm');
  if (adminForm) {
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const desc = document.getElementById('desc').value;
      const week = document.getElementById('week').value;
      const fileInput = document.getElementById('fileInput');
      const submitBtn = adminForm.querySelector('button[type="submit"]');

      if (!editingId && fileInput.files.length === 0) {
        showToast('Por favor selecciona un archivo para subir.', 'error');
        return;
      }

      const processSave = (fileData, fileType, fileName) => {
        const files = getFiles();
        if (editingId) {
          const index = files.findIndex(f => f.id === editingId);
          if (index !== -1) {
            files[index].title = title;
            files[index].desc = desc;
            files[index].week = parseInt(week);
            if (fileData) {
              files[index].data = fileData;
              files[index].type = fileType;
              files[index].fileName = fileName;
            }
          }
          showToast('Â¡Archivo actualizado correctamente!');
        } else {
          const newEntry = {
            id: Date.now(),
            title,
            desc,
            week: parseInt(week),
            type: fileType,
            data: fileData,
            fileName: fileName
          };
          files.push(newEntry);
          showToast('Â¡Archivo guardado en la Semana ' + week + '!');
        }

        try {
          saveFiles(files);
          adminForm.reset();
          cancelEdit();
          renderAdminFiles();
        } catch (error) {
          if (error.name === 'QuotaExceededError') {
            showToast('Error: LÃ­mite de almacenamiento excedido. Sube un archivo mÃ¡s ligero.', 'error');
          } else {
            showToast('OcurriÃ³ un error al guardar.', 'error');
          }
        } finally {
          submitBtn.innerHTML = '<i class="fas fa-save"></i> Guardar y Publicar Archivo';
          submitBtn.disabled = false;
        }
      };

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
      submitBtn.disabled = true;

      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];

        // 6. ValidaciÃ³n de TamaÃ±o de Archivos: MÃ¡ximo 10 MB
        if (file.size > 10 * 1024 * 1024) {
          showToast('Error: El archivo excede el lÃ­mite de 10 MB.', 'error');
          submitBtn.innerHTML = '<i class="fas fa-save"></i> Guardar y Publicar Archivo';
          submitBtn.disabled = false;
          return;
        }

        const fileType = file.type.includes('image') ? 'image' : 'pdf';
        const fileName = file.name;
        // 1. Guardar URL relativa en lugar de base64
        const fileData = './archivos/' + fileName;

        // SimulaciÃ³n de "Subida" a carpeta local para entornos sin backend:
        // Disparamos una descarga automÃ¡tica para que el usuario pueda moverlo a la carpeta /archivos/
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 100);

        processSave(fileData, fileType, fileName);
      } else {
        processSave(null, null, null);
      }
    });
  }

  // Confirm Modal Delete Logic
  window.deleteFile = function (id) {
    fileToDelete = id;
    document.getElementById('confirmModal').classList.add('active');
  };

  document.getElementById('cancelConfirmBtn')?.addEventListener('click', () => {
    document.getElementById('confirmModal').classList.remove('active');
    fileToDelete = null;
  });

  document.getElementById('acceptConfirmBtn')?.addEventListener('click', () => {
    if (fileToDelete) {
      let files = getFiles();
      files = files.filter(f => f.id !== fileToDelete);
      saveFiles(files);
      document.getElementById('confirmModal').classList.remove('active');
      renderAdminFiles();
      showToast('Archivo eliminado exitosamente.', 'success');
      fileToDelete = null;
    }
  });

  window.editFile = function (id) {
    const files = getFiles();
    const file = files.find(f => f.id === id);
    if (file) {
      editingId = id;
      document.getElementById('title').value = file.title;
      document.getElementById('desc').value = file.desc;
      document.getElementById('week').value = file.week;
      document.getElementById('fileInput').required = false;

      const submitBtn = document.querySelector('#adminForm button[type="submit"]');
      submitBtn.innerHTML = '<i class="fas fa-save"></i> Guardar Cambios';
      submitBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';

      let cancelBtn = document.getElementById('cancelEditBtn');
      if (!cancelBtn) {
        cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancelEditBtn';
        cancelBtn.type = 'button';
        cancelBtn.className = 'btn btn-danger';
        cancelBtn.innerHTML = '<i class="fas fa-times"></i> Cancelar EdiciÃ³n';
        cancelBtn.style.width = '100%';
        cancelBtn.style.marginTop = '1rem';
        cancelBtn.onclick = cancelEdit;
        submitBtn.parentNode.insertBefore(cancelBtn, submitBtn.nextSibling);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.cancelEdit = function () {
    editingId = null;
    document.getElementById('adminForm').reset();
    document.getElementById('fileInput').required = true;
    const submitBtn = document.querySelector('#adminForm button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-save"></i> Guardar y Publicar Archivo';
    submitBtn.style.background = '';
    const cancelBtn = document.getElementById('cancelEditBtn');
    if (cancelBtn) cancelBtn.remove();
  };

  // Filter Logic Admin
  const adminFilter = document.getElementById('adminFilterWeek');
  if (adminFilter) {
    adminFilter.addEventListener('change', () => renderAdminFiles());
  }

  window.renderAdminFiles = function () {
    const container = document.getElementById('adminFilesContainer');
    if (!container) return;

    let files = getFiles();
    const filterVal = document.getElementById('adminFilterWeek')?.value || 'all';

    if (filterVal !== 'all') {
      files = files.filter(f => f.week === parseInt(filterVal));
    }

    if (files.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding: 2rem;">No hay archivos en esta vista.</p>';
      return;
    }

    files.sort((a, b) => a.week - b.week);

    container.innerHTML = `
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; color: white;">
              <thead>
                  <tr style="border-bottom: 2px solid var(--glass-border); background: rgba(255,255,255,0.05);">
                      <th style="padding: 1rem; text-align: left;">Semana</th>
                      <th style="padding: 1rem; text-align: left;">TÃ­tulo</th>
                      <th style="padding: 1rem; text-align: left;">Tipo</th>
                      <th style="padding: 1rem; text-align: center;">Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  ${files.map(f => `
                      <tr style="border-bottom: 1px solid var(--glass-border); transition: background 0.3s;" onmouseover="this.style.background='rgba(255,255,255,0.02)'" onmouseout="this.style.background='transparent'">
                          <td style="padding: 1rem;">Semana ${f.week}</td>
                          <td style="padding: 1rem; font-weight:500;">${f.title}</td>
                          <td style="padding: 1rem;">
                              <i class="fas ${f.type === 'pdf' ? 'fa-file-pdf' : 'fa-image'}" style="color: ${f.type === 'pdf' ? 'var(--danger-color)' : 'var(--accent-color)'}"></i>
                          </td>
                          <td style="padding: 1rem; text-align: center;">
                              <button onclick="editFile(${f.id})" class="btn" style="background:#f59e0b; color:white; padding: 0.4rem 0.8rem; margin-right: 0.5rem; font-size:0.85rem;"><i class="fas fa-edit"></i></button>
                              <button onclick="deleteFile(${f.id})" class="btn btn-danger" style="padding: 0.4rem 0.8rem; font-size:0.85rem;"><i class="fas fa-trash"></i></button>
                          </td>
                      </tr>
                  `).join('')}
              </tbody>
          </table>
        </div>
      `;
  };
}

// Render Weeks on Index Page
const renderIndexWeeks = () => {
  const container = document.getElementById('indexWeeksContainer');
  if (!container) return;

  const filterVal = document.getElementById('searchWeekIndex')?.value.toLowerCase() || '';
  const files = getFiles();
  let html = '';

  for (let i = 1; i <= 16; i++) {
    const weekFiles = files.filter(f => f.week === i);
    const hasContent = weekFiles.length > 0;
    const delay = (i * 0.05);

    let statusHtml = '';
    let titleHtml = '';
    let progressWidth = hasContent ? '100%' : '0%';
    let searchTitle = '';

    if (hasContent) {
      statusHtml = `<span style="background: rgba(16, 185, 129, 0.15); color: var(--success-color); padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(16, 185, 129, 0.3);"><i class="fas fa-check-circle"></i> Completado</span>`;
      titleHtml = `<p style="color: var(--text-color); font-size: 0.95rem; margin-top: 1rem; font-weight:500; height: 40px; overflow: hidden; text-overflow: ellipsis;">${weekFiles[0].title}</p>`;
      searchTitle = weekFiles[0].title.toLowerCase();
    } else {
      statusHtml = `<span style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; border: 1px solid rgba(255, 255, 255, 0.1);"><i class="fas fa-clock"></i> Pendiente</span>`;
      titleHtml = `<p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 1rem; height: 40px;">-</p>`;
    }

    // Search Filter Logic
    const weekText = `semana ${i}`;
    if (filterVal && !weekText.includes(filterVal) && !searchTitle.includes(filterVal)) {
      continue; // Skip rendering this card if it doesn't match search
    }

    html += `
            <div class="card animate-slide-up" style="animation-delay: ${delay}s;">
                <div class="card-content" style="text-align: center; justify-content: center; align-items: center; padding: 2rem 1.5rem;">
                    <div style="margin-bottom: 1rem;">
                        ${statusHtml}
                    </div>
                    <h3 class="card-title" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--accent-color);">Semana ${i}</h3>
                    ${titleHtml}
                    
                    <div class="progress-bg">
                        <div class="progress-bar" style="width: ${progressWidth}"></div>
                    </div>

                    <a href="./semana${i}.html" class="btn btn-primary" style="margin-top: 1.5rem; width: 100%;"><i class="fas fa-sign-in-alt"></i> Entrar</a>
                </div>
            </div>
        `;
  }

  if (html === '') {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:var(--text-muted);">No se encontraron resultados para tu bÃºsqueda.</p>';
  } else {
    container.innerHTML = html;
    // Trigger setTimeout to animate progress bars visually after DOM insertion
    setTimeout(() => {
      const bars = document.querySelectorAll('.progress-bar');
      bars.forEach(b => {
        const w = b.style.width;
        b.style.width = '0%';
        setTimeout(() => b.style.width = w, 100);
      });
    }, 100);
  }
};

// Search filter listener for Index
const searchInput = document.getElementById('searchWeekIndex');
if (searchInput) {
  searchInput.addEventListener('keyup', renderIndexWeeks);
}

// Dynamic Rendering for Week Pages
const renderFiles = () => {
  const container = document.getElementById('filesContainer');
  if (!container) return;

  const currentWeek = parseInt(container.dataset.week);
  const files = getFiles();
  const weekFiles = files.filter(f => f.week === currentWeek);

  if (weekFiles.length === 0) {
    container.innerHTML = `
      <div class="animate-fade-in" style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; background: var(--glass-bg); border-radius: 20px; border: 1px dashed var(--glass-border);">
        <i class="fas fa-folder-open" style="font-size: 4rem; color: var(--text-muted); margin-bottom: 1.5rem; opacity: 0.5;"></i>
        <h3 style="color: var(--text-color); margin-bottom: 0.5rem;">Carpeta VacÃ­a</h3>
        <p style="color: var(--text-muted); font-size: 1.1rem;">No hay archivos subidos para esta semana aÃºn.</p>
        ${localStorage.getItem('portafolio_auth') === 'true'
        ? '<a href="./admin.html" class="btn btn-primary" style="margin-top: 1.5rem;"><i class="fas fa-plus"></i> Subir Archivo</a>'
        : ''}
      </div>`;
    return;
  }

  container.innerHTML = weekFiles.map((file, index) => {
    const delay = index * 0.15;
    let preview = '';

    if (file.type === 'image') {
      preview = `<div style="overflow:hidden; height: 220px; border-bottom: 1px solid var(--glass-border);"><img src="${file.data}" alt="${file.title}" style="width:100%; height:100%; object-fit:cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" loading="lazy"></div>`;
    } else {
      preview = `<div class="card-img-preview" style="background: linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.05));"><i class="fas fa-file-pdf" style="color: var(--danger-color);"></i></div>`;
    }

    const icon = file.type === 'pdf' ? 'fa-file-pdf' : 'fa-image';
    const actionText = file.type === 'pdf' ? 'Ver Documento' : 'Ver Imagen';

    return `
      <div class="card animate-slide-up" style="animation-delay: ${delay}s">
        ${preview}
        <div class="card-content">
          <h3 class="card-title">${file.title}</h3>
          <p class="card-desc">${file.desc}</p>
          <div style="display:flex; gap:0.5rem;">
              <button onclick="viewMedia('${file.data}', '${file.type}')" class="btn btn-primary" style="flex:1;">
                <i class="fas fa-eye"></i> ${actionText}
              </button>
              <button onclick="openFile('${file.data}', '${file.fileName}')" class="btn" style="background: rgba(255,255,255,0.1); color:white;" title="Descargar">
                <i class="fas fa-download"></i>
              </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
};

// Navbar dynamic state
const updateNavbar = () => {
  const authItem = document.getElementById('authNav');
  if (authItem) {
    if (localStorage.getItem('portafolio_auth') === 'true') {
      authItem.innerHTML = `<a href="./admin.html" class="btn btn-primary" style="background: linear-gradient(135deg, #10b981, #059669); box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);"><i class="fas fa-cog"></i> Panel Admin</a>`;
    }
  }
}

// Active state for navigation links
const setActiveLink = () => {
  const path = window.location.pathname;
  if (path.endsWith('/') || path.endsWith('index.html')) return;

  const links = document.querySelectorAll('.dropdown-item');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && path.includes(href.replace('./', ''))) {
      link.style.background = 'var(--glass-bg)';
      link.style.color = 'var(--accent-color)';
      link.style.transform = 'translateX(5px)';

      const parentLink = link.closest('.nav-item')?.querySelector('.nav-link');
      if (parentLink) {
        parentLink.style.color = 'var(--accent-color)';
      }
    }
  });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderFiles();
  renderIndexWeeks();
  if (window.location.pathname.includes('admin.html')) {
    renderAdminFiles();
  }
  updateNavbar();
  setActiveLink();
});


window.addEventListener("load", () => {
  const splash = document.getElementById("splash");

  // âœ… PROTEGER EL CANVAS (CLAVE)
  const canvas = document.getElementById("particles");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedY: Math.random() * 0.5 + 0.2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168,85,247,0.7)";
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // âœ… SPLASH SIEMPRE SE CIERRA
  if (splash) {
    setTimeout(() => {
      splash.classList.add("fade-out");

      setTimeout(() => {
        splash.style.display = "none";
      }, 1200);

    }, 3000);
  }
});


// ðŸ”¥ PLAN B (ANTI BUG TOTAL)
setTimeout(() => {
  const splash = document.getElementById("splash");
  if (splash) splash.style.display = "none";
}, 5000);


// ðŸŒŒ GALAXIA PRO INTERACTIVA
(function () {
  const canvas = document.getElementById("galaxy-bg");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  let mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  let stars = [];

  // â­ crear estrellas
  for (let i = 0; i < 140; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5,
      baseX: 0,
      baseY: 0,
      speed: Math.random() * 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      // ðŸŒŒ movimiento base (caÃ­da lenta)
      star.y += star.speed;
      if (star.y > canvas.height) star.y = 0;

      // ðŸ§² interacciÃ³n con mouse (parallax + atracciÃ³n suave)
      let dx = mouse.x - star.x;
      let dy = mouse.y - star.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        star.x -= dx * 0.002;
        star.y -= dy * 0.002;
      }

      // âœ¨ brillo dinÃ¡mico
      let brightness = 0.5 + Math.sin(Date.now() * 0.002 + star.x) * 0.5;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${brightness})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();

const elements = document.querySelectorAll(".card, .week-title");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// ==========================================================================
// FUTURISTIC AI / CYBERPUNK UI - PARTICULAS Y TRANSICIONES
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initCursorParticles();
});

function initPageTransitions() {
  // Animacion de entrada
  document.body.classList.add('page-enter-active');
  // Forzamos un reflow para que la transicion de entrada funcione correctamente
  void document.body.offsetWidth;
  document.body.classList.remove('page-enter-active');

  // Interceptar enlaces para animacion de salida
 document.addEventListener('click', e => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');

  // ❌ ignorar si no es válido
  if (!href || href === '#' || href.startsWith('#')) return;

  // ❌ ignorar dropdowns
  if (link.classList.contains('dropdown-toggle')) return;

  // ❌ ignorar si es botón del menú
  if (link.closest('.nav-links') && window.innerWidth <= 768) return;

  const isInternal =
    href.startsWith('/') ||
    href.startsWith('./') ||
    (!href.startsWith('http'));

  if (isInternal) {
    e.preventDefault();

    document.body.classList.add('page-exit-active');

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  }
});
}

function initCursorParticles() {
  // Solo agregar el canvas de particulas si no estamos en una zona donde ya hay canvas intensivo
  const canvas = document.createElement('canvas');
  canvas.id = 'cursor-particles';
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9998'; // Justo debajo de los loaders
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      // Neon colors: cian, violeta, azul
      const colors = ['#00f3ff', '#bc13fe', '#0075ff'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.size = Math.random() * 2 + 1; // Tamano pequeno y elegante
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.life = 1;
      this.decay = Math.random() * 0.02 + 0.01; // Desvanecimiento
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life -= this.decay;
    }

    draw() {
      ctx.globalAlpha = this.life;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
      ctx.globalAlpha = 1;
    }
  }

  function addParticles(x, y) {
    // Reducimos cantidad para mayor rendimiento
    for (let i = 0; i < 2; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].life <= 0) {
        particles.splice(i, 1);
        i--;
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('mousemove', (e) => {
    addParticles(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      addParticles(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}

// ==========================================================================
// MICRO-INTERACCIONES Y EFECTOS AVANZADOS (APP MODERNA)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initCursorGlow();
  initMagneticButtons();
  initAdvancedScrollAnimations();
});

// 1. CURSOR CON BRILLO DINAMICO
function initCursorGlow() {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  // Suavizado del glow usando requestAnimationFrame para alto rendimiento
  function render() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate(calc(${currentX}px - 50%), calc(${currentY}px - 50%))`;
    requestAnimationFrame(render);
  }
  render();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Efecto interactivo al hacer click
  document.addEventListener('mousedown', () => glow.classList.add('active'));
  document.addEventListener('mouseup', () => glow.classList.remove('active'));

  // Ocultar en movil para no afectar rendimiento ni UX
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    glow.style.display = 'none';
  }
}

// 2. EFECTO MAGNET EN BOTONES
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Movimiento magnetico sutil
      const moveX = x * 0.15;
      const moveY = y * 0.15;

      btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = ''; // Restaurar transition de CSS
    });
  });
}

// 3. ANIMACIONES AL SCROLL (INTERSECTION OBSERVER OPTIMIZADO)
function initAdvancedScrollAnimations() {
  // Seleccionar elementos clave (textos, cards, forms)
  const elementsToAnimate = document.querySelectorAll('.card, h2, h3, .form-container, .navbar, footer');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ui-visible');
        obs.unobserve(entry.target); // Dejar de observar para maximo rendimiento
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach((el, index) => {
    // Evitar doble clase si ya tiene animacion existente
    if (!el.classList.contains('hidden-animate') && !el.classList.contains('navbar')) {
      el.classList.add('ui-reveal');

      // Efecto cascada (stagger) para las cards y multiples elementos juntos
      if (el.classList.contains('card')) {
        el.style.transitionDelay = `${(index % 4) * 0.1}s`;
      }
      observer.observe(el);
    }
    // ==========================================================================
    // UI/UX AVANZADA: PARALLAX, 3D, ILUMINACION Y MICROINTERACCIONES
    // ==========================================================================

    document.addEventListener('DOMContentLoaded', () => {
      initParallaxBackground();
      init3DCards();
    });

    function initParallaxBackground() {
      const video = document.querySelector('.hero-video');
      const splash = document.getElementById('splash');

      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

      let rafId = null;
      window.addEventListener('mousemove', (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth - 0.5) * 20;
          const y = (e.clientY / window.innerHeight - 0.5) * 20;

          if (video) {
            video.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.05)`;
          }

          if (splash && !splash.classList.contains('hidden')) {
            const splashContent = splash.querySelector('.splash-content');
            if (splashContent) {
              splashContent.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
            }
          }
          rafId = null;
        });
      }, { passive: true });
    }

    function init3DCards() {
      const cards = document.querySelectorAll('.card');

      if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

      cards.forEach(card => {
        let rafId = null;
        card.addEventListener('mousemove', (e) => {
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none';
            rafId = null;
          });
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          card.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
      });
    }
  }
  );
  // ==========================================================================
  // DIOS SUPREMO UI / UX - SCRIPT DEFINITIVO
  // ==========================================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

  function initApp() {
    try {
      initGodCursor();
      initAIBot();
    } catch (e) {
      console.error("Error iniciando app:", e);
    }
  }

  function initGodCursor() {
    // Si es movil, abortar
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    // Eliminar el cursor glow anterior si existe
    const oldGlow = document.getElementById('cursor-glow');
    if (oldGlow) oldGlow.remove();

    const cursor = document.createElement('div');
    cursor.id = 'god-cursor';

    const trail = document.createElement('div');
    trail.id = 'god-cursor-trail';

    document.body.appendChild(cursor);
    document.body.appendChild(trail);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let trailX = mouseX;
    let trailY = mouseY;
    let cursorX = mouseX;
    let cursorY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function animateGodCursor() {
      // Cursor rapido
      cursorX += (mouseX - cursorX) * 0.5;
      cursorY += (mouseY - cursorY) * 0.5;
      cursor.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%))`;

      // Trail suave (estela)
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      trail.style.transform = `translate(calc(${trailX}px - 50%), calc(${trailY}px - 50%))`;

      requestAnimationFrame(animateGodCursor);
    }
    animateGodCursor();

    // Hover logic
    const interactables = document.querySelectorAll('a, button, .card, input, select');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', () => trail.classList.add('hover-active'));
      el.addEventListener('mouseleave', () => trail.classList.remove('hover-active'));
    });
  }

  // ==========================================================================
  // ASISTENTE VIRTUAL IA (BOT)
  // ==========================================================================

 function initAIBot() {

  const USE_VOICE = true;

  let introSpoken = false;
  let isVoiceEnabled = USE_VOICE;

  const botContainer = document.createElement('div');
  botContainer.id = 'ai-bot-container';

  botContainer.innerHTML = `
    <div id="ai-chat-window">
      <div id="ai-chat-header">
        <div id="ai-chat-header-title">
          <div class="ai-avatar-mini"></div>
          <span>Nexus IA</span>
        </div>
        <div style="display:flex; gap: 10px;">
           <button id="ai-chat-voice"><i class="fas fa-volume-up"></i></button>
           <button id="ai-chat-close"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <div id="ai-chat-body"></div>

      <!-- 🔥 PREGUNTAS SUGERIDAS -->
      <div id="ai-suggestions"></div>

      <div id="ai-chat-input-area">
        <input type="text" id="ai-chat-input" placeholder="Pregunta a la IA...">
        <button id="ai-chat-send"><i class="fas fa-paper-plane"></i></button>
      </div>
    </div>

    <div id="ai-bot-btn">
      <div class="ai-avatar-core"></div>
      <div class="ai-avatar-ring"></div>
    </div>
  `;

  document.body.appendChild(botContainer);

  const botBtn = document.getElementById('ai-bot-btn');
  const tooltip = document.getElementById('ai-bot-tooltip');
  const chatWindow = document.getElementById('ai-chat-window');
  const closeBtn = document.getElementById('ai-chat-close');
  const chatBody = document.getElementById('ai-chat-body');
  const chatInput = document.getElementById('ai-chat-input');
  const sendBtn = document.getElementById('ai-chat-send');
  const voiceBtn = document.getElementById('ai-chat-voice');
  const suggestions = document.getElementById('ai-suggestions');

  // 🔊 VOZ
  voiceBtn.addEventListener('click', () => {
    isVoiceEnabled = !isVoiceEnabled;
    voiceBtn.innerHTML = isVoiceEnabled 
      ? '<i class="fas fa-volume-up"></i>' 
      : '<i class="fas fa-volume-mute"></i>';

    if (!isVoiceEnabled) window.speechSynthesis.cancel();
  });

  function speak(text) {
    if (!isVoiceEnabled || !('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.95;

    speechSynthesis.speak(utterance);
  }

  // =========================
  // 🔥 PREGUNTAS SUGERIDAS
  // =========================
  function loadSuggestions() {
    const preguntas = [
      "¿Qué trata la semana 1?",
      "¿Qué hiciste en la semana 2?",
      "Explícame la semana 3",
      "¿Qué tecnologías usaste?",
      "Resumen general del portafolio"
    ];

    suggestions.innerHTML = '';

    preguntas.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'ai-suggestion-btn';
      btn.innerText = p;

      btn.onclick = () => {
        addMessageWithTyping('user', p);
      };

      suggestions.appendChild(btn);
    });
  }

  // =========================
  // MENSAJES
  // =========================
  function addMessageWithTyping(sender, text) {
    const msg = document.createElement('div');
    msg.className = `ai-msg ${sender}`;
    chatBody.appendChild(msg);

    if (sender === 'bot') {

      let i = 0;
      function typing() {
        if (i < text.length) {
          msg.innerHTML += text[i++];
          setTimeout(typing, 15);
        }
      }
      typing();

      speak(text);

    } else {
      msg.innerHTML = text;
      processUserMessage(text);
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // =========================
  // RESPUESTAS INTELIGENTES
  // =========================
  function processUserMessage(text) {
    text = text.toLowerCase();

    let response = "No entendí, intenta otra pregunta.";
    if (text.includes("semana 4")) {
   response = "La semana 4 trata sobre normalización de bases de datos, incluyendo 1FN, 2FN y 3FN.";
    }
    else if (text.includes("modelo entidad")) {
      response = "El modelo entidad-relación permite diseñar bases de datos mediante entidades, atributos y relaciones.";
    }
    else if (text.includes("sql")) {
      response = "SQL Server fue instalado y utilizado para gestionar bases de datos relacionales.";
    }
    if (text.includes("semana 1")) {
      response = "La semana 1 trata sobre la introducción a base de datos.";
    }
    else if (text.includes("semana 2")) {
      response = "La semana 2 incluye conceptos intermedios y prácticas.";
    }
    else if (text.includes("semana 3")) {
      response = "La semana 3 se enfoca en modelado de datos.";
    }
    else if (text.includes("tecnologias")) {
      response = "Se utilizó HTML, CSS y JavaScript.";
    }
    else if (text.includes("resumen")) {
      response = "Este portafolio recopila 16 semanas de aprendizaje en Base de Datos II.";
    }

    setTimeout(() => {
      addMessageWithTyping('bot', response);
    }, 600);
  }

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessageWithTyping('user', text);
    chatInput.value = '';
  }

  sendBtn.onclick = handleSend;
  chatInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleSend();
  });

  // =========================
  // ABRIR BOT
  // =========================
  function toggleChat() {
    chatWindow.classList.toggle('active');

    if (chatWindow.classList.contains('active')) {
      botBtn.style.display = 'none';

      if (!introSpoken) {

        const mensaje = "Hola, soy Nexus IA y este portafolio web trata sobre la recopilación de avances, tareas y proyectos del curso Base de Datos II durante 16 semanas. Pregunta lo que quieras.";

        setTimeout(() => {
          addMessageWithTyping('bot', mensaje);
          loadSuggestions(); // 🔥 cargar botones
        }, 400);

        introSpoken = true;
      }

    } else {
      botBtn.style.display = 'flex';
    }
  }

  botBtn.onclick = toggleChat;
  closeBtn.onclick = toggleChat;
}
// ===============================
// TOOLTIP FLOTANTE DEL BOT (FIX REAL)
// ===============================
window.addEventListener("load", () => {
  const tooltip = document.getElementById("ai-bot-tooltip");

  if (!tooltip) return;

  // Mostrar después de unos segundos
  setTimeout(() => {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateY(0)";
    tooltip.style.pointerEvents = "auto"; // 🔥 Habilitar clics cuando es visible
  }, 2500);

  // Ocultar al hacer click
  tooltip.addEventListener("click", () => {
    tooltip.style.display = "none";

    const botBtn = document.getElementById("ai-bot-btn");
    if (botBtn) botBtn.click();
  });
});


// MENU HAMBURGUESA
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// DROPDOWN EN CELULAR
document.querySelectorAll('.nav-item > .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      const parent = link.parentElement;

      // SOLO bloquear si es el botón de unidad (no las semanas)
      if (parent.querySelector('.dropdown-menu') && link.getAttribute('href') === '#') {
        e.preventDefault();
        parent.classList.toggle('active');
      }
    }
  });
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', (e) => {

    const href = item.getAttribute('href');

    // 🔥 FORZAR navegación (clave)
    if (href && href !== '#') {
      window.location.href = href;
    }

    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
  });
});
}
