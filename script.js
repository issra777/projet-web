// ======================================
// DONNÉES DES ÉTUDIANTS (Simulation)
// ======================================
const studentsData = [
    {
        id: 1,
        nom: "Amira Ben Salah",
        niveau: "m2",
        domaine: "developpement",
        competences: ["React", "Node.js", "MongoDB", "UI/UX"],
        disponibilite: ["projet", "startup"],
        bio: "Passionnée par le développement full-stack et l'innovation numérique"
    },
    {
        id: 2,
        nom: "Mohamed Trabelsi",
        niveau: "l3",
        domaine: "data",
        competences: ["Python", "Machine Learning", "TensorFlow", "Data Visualization"],
        disponibilite: ["projet", "stage"],
        bio: "Intéressé par l'intelligence artificielle et l'analyse de données"
    },
    {
        id: 3,
        nom: "Sarra Khelifi",
        niveau: "m1",
        domaine: "design",
        competences: ["UI/UX", "Figma", "Adobe XD", "Prototyping"],
        disponibilite: ["startup"],
        bio: "Designer UX/UI créative avec un œil pour les détails"
    },
    {
        id: 4,
        nom: "Yassine Mansour",
        niveau: "l2",
        domaine: "marketing",
        competences: ["SEO", "Social Media", "Content Marketing", "Google Analytics"],
        disponibilite: ["stage", "projet"],
        bio: "Spécialiste du marketing digital et des réseaux sociaux"
    },
    {
        id: 5,
        nom: "Nadia Gharbi",
        niveau: "m2",
        domaine: "business",
        competences: ["Analyse Financière", "Excel", "Power BI", "ERP"],
        disponibilite: ["projet", "startup"],
        bio: "Experte en Business Intelligence et systèmes de gestion"
    },
    {
        id: 6,
        nom: "Karim Bouaziz",
        niveau: "l3",
        domaine: "developpement",
        competences: ["Vue.js", "Laravel", "MySQL", "API REST"],
        disponibilite: ["stage"],
        bio: "Développeur web passionné par les architectures modernes"
    },
    {
        id: 7,
        nom: "Leila Messaoudi",
        niveau: "m1",
        domaine: "data",
        competences: ["R", "Statistics", "Big Data", "Tableau"],
        disponibilite: ["projet", "stage"],
        bio: "Analyste de données avec expertise en statistiques"
    },
    {
        id: 8,
        nom: "Ahmed Jebali",
        niveau: "l1",
        domaine: "developpement",
        competences: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        disponibilite: ["stage"],
        bio: "Étudiant motivé en développement web front-end"
    },
    {
        id: 9,
        nom: "Fatma Ghariani",
        niveau: "m2",
        domaine: "ia",
        competences: ["Deep Learning", "PyTorch", "Computer Vision", "NLP"],
        disponibilite: ["projet", "startup"],
        bio: "Passionnée par l'intelligence artificielle et le deep learning"
    },
    {
        id: 10,
        nom: "Sami Hadji",
        niveau: "l3",
        domaine: "cybersecurite",
        competences: ["Ethical Hacking", "Penetration Testing", "Network Security"],
        disponibilite: ["stage", "projet"],
        bio: "Spécialiste en cybersécurité et tests de pénétration"
    }
];

// ======================================
// DONNÉES DES PROJETS
// ======================================
const projectsData = [
    {
        nom: "Application Mobile E-Commerce",
        type: "pfe",
        domaine: "Développement",
        competences: "React Native, Node.js, UI/UX",
        duree: "6 mois",
        description: "Développement d'une application mobile complète pour la vente en ligne avec paiement intégré. Marketplace tunisienne avec fonctionnalités avancées de géolocalisation et recommandation personnalisée.",
        besoins: ["2 développeurs React Native", "1 designer UI/UX", "1 développeur backend Node.js"]
    },
    {
        nom: "Plateforme de Data Analytics",
        type: "project",
        domaine: "Data Science",
        competences: "Python, Machine Learning, Visualisation",
        duree: "4 mois",
        description: "Création d'une plateforme d'analyse de données avec dashboards interactifs pour entreprises. Utilisation de Machine Learning pour prédictions et insights business.",
        besoins: ["2 data scientists", "1 développeur web Python/Flask", "1 expert en visualisation"]
    },
    {
        nom: "Startup FinTech",
        type: "creation",
        domaine: "Blockchain",
        competences: "Solidity, Web3.js, Smart Contracts",
        duree: "8 mois",
        description: "Plateforme FinTech décentralisée pour transferts d'argent peer-to-peer utilisant la blockchain Ethereum.",
        besoins: ["2 développeurs Blockchain", "1 expert en Smart Contracts", "1 expert en cybersécurité"]
    },
    {
        nom: "Système de Gestion Scolaire",
        type: "pfe",
        domaine: "Développement",
        competences: "Laravel, Vue.js, MySQL",
        duree: "5 mois",
        description: "Plateforme EdTech complète pour gestion scolaire incluant notes, absences, planning et communication parents-professeurs.",
        besoins: ["2 développeurs full-stack Laravel", "1 développeur Vue.js", "1 UX designer"]
    },
    {
        nom: "Application IoT Smart Home",
        type: "debut",
        domaine: "IoT & Électronique",
        competences: "Arduino, React, Firebase",
        duree: "4 mois",
        description: "Solution domotique connectée permettant de contrôler l'éclairage, la température et la sécurité via application mobile.",
        besoins: ["2 ingénieurs en électronique", "1 développeur mobile", "1 expert Cloud/Firebase"]
    },
    {
        nom: "Assistant Virtuel IA",
        type: "creation",
        domaine: "Intelligence Artificielle",
        competences: "Python, NLP, TensorFlow",
        duree: "6 mois",
        description: "Chatbot intelligent adapté au dialecte tunisien utilisant le traitement du langage naturel et l'apprentissage automatique.",
        besoins: ["2 experts en NLP", "1 data scientist", "1 développeur full-stack"]
    }
];

// Variable globale pour stocker tous les étudiants affichés
let displayedStudents = [...studentsData];

// ======================================
// INITIALISATION AU CHARGEMENT DU DOM
// ======================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé - Initialisation de l\'application');
   
    // Afficher les étudiants seulement sur la page étudiants
    const studentsGrid = document.getElementById('students-grid');
    if (studentsGrid) {
        displayStudents(studentsData);
        updateResultsCount(studentsData.length);
    }
   
    // Animation des nombres dans les statistiques
    animateStats();
   
    // Animations au scroll
    window.addEventListener('scroll', animateOnScroll);
   
    // Mise en surbrillance de la page active
    highlightActivePage();
});

// ======================================
// ANIMATION DES STATISTIQUES
// ======================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        // Observer pour démarrer l'animation quand visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateNumber();
                observer.disconnect();
            }
        });
        
        observer.observe(stat);
    });
}

// ======================================
// MISE EN SURBRILLANCE DE LA PAGE ACTIVE
// ======================================
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-navigation a');
   
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ======================================
// MISE À JOUR DU COMPTEUR DE RÉSULTATS
// ======================================
function updateResultsCount(count) {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        resultsCount.textContent = `${count} étudiant${count > 1 ? 's' : ''} trouvé${count > 1 ? 's' : ''}`;
    }
}

// ======================================
// AFFICHAGE DES ÉTUDIANTS
// ======================================
function displayStudents(students) {
    const grid = document.getElementById('students-grid');
    const noResults = document.getElementById('no-results');
   
    if (!grid) return;
   
    grid.innerHTML = '';
   
    if (students.length === 0) {
        noResults.style.display = 'block';
        return;
    }
   
    noResults.style.display = 'none';
   
    students.forEach((student, index) => {
        const card = createStudentCard(student);
        card.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s both`;
        grid.appendChild(card);
    });
   
    displayedStudents = students;
}

// ======================================
// CRÉATION D'UNE CARTE ÉTUDIANT
// ======================================
function createStudentCard(student) {
    const card = document.createElement('article');
    card.className = 'student-card';
    card.setAttribute('data-id', student.id);
    card.setAttribute('data-domaine', student.domaine);
   
    const initiales = student.nom.split(' ').map(n => n[0]).join('');
   
    card.innerHTML = `
        <div class="student-header">
            <div class="student-avatar">${initiales}</div>
            <div class="student-info">
                <h3>${student.nom}</h3>
                <p class="student-level">${getNiveauLabel(student.niveau)}</p>
            </div>
        </div>
        <span class="student-domain">${getDomaineLabel(student.domaine)}</span>
        <div class="student-skills">
            <h4>Compétences :</h4>
            <div class="skills-list">
                ${student.competences.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
        <p style="margin-top: 1rem; color: var(--text-light); font-size: 0.9rem;">${student.bio}</p>
        <div class="student-availability">
            <div class="availability-badge"></div>
            <span>Disponible pour: ${student.disponibilite.map(d => getDisponibiliteLabel(d)).join(', ')}</span>
        </div>
    `;
   
    card.addEventListener('click', function() {
        showStudentDetails(student);
    });
   
    return card;
}

// ======================================
// FONCTIONS UTILITAIRES
// ======================================
function getNiveauLabel(niveau) {
    const labels = {
        'l1': 'Licence 1',
        'l2': 'Licence 2',
        'l3': 'Licence 3',
        'm1': 'Master 1',
        'm2': 'Master 2'
    };
    return labels[niveau] || niveau;
}

function getDomaineLabel(domaine) {
    const labels = {
        'developpement': 'Développement Web & Mobile',
        'ia': 'Intelligence Artificielle',
        'design': 'Design UI/UX',
        'marketing': 'Marketing Digital',
        'data': 'Data Science',
        'business': 'Business Intelligence',
        'cybersecurite': 'Cybersécurité',
        'cloud': 'Cloud Computing'
    };
    return labels[domaine] || domaine;
}

function getDisponibiliteLabel(dispo) {
    const labels = {
        'projet': 'PFE',
        'stage': 'Stage',
        'startup': 'Startup'
    };
    return labels[dispo] || dispo;
}

// ======================================
// RECHERCHE ET FILTRES
// ======================================
function searchStudents() {
    filterStudents();
}

function filterStudents() {
    const searchTerm = document.getElementById('recherche-competence').value.toLowerCase();
    const domaineFilter = document.getElementById('filtre-domaine').value;
    
    const disponibiliteChecked = Array.from(document.querySelectorAll('input[name="disponibilite"]:checked'))
        .map(cb => cb.value);
    
    const niveauSelected = document.querySelector('input[name="niveau"]:checked').value;
   
    let filtered = studentsData.filter(student => {
        const matchesSearch = searchTerm === '' ||
            student.competences.some(comp => comp.toLowerCase().includes(searchTerm)) ||
            student.nom.toLowerCase().includes(searchTerm);
       
        const matchesDomaine = domaineFilter === 'tous' || student.domaine === domaineFilter;
       
        const matchesDisponibilite = disponibiliteChecked.length === 0 ||
            disponibiliteChecked.some(d => student.disponibilite.includes(d));
       
        const matchesNiveau = niveauSelected === 'tous' || student.niveau === niveauSelected;
       
        return matchesSearch && matchesDomaine && matchesDisponibilite && matchesNiveau;
    });
   
    displayStudents(filtered);
    updateResultsCount(filtered.length);
    
    // Scroll vers les résultats
    if (filtered.length > 0) {
        document.getElementById('etudiants').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function resetFilters() {
    const form = document.getElementById('form-recherche');
    if (form) {
        form.reset();
    }
   
    displayStudents(studentsData);
    updateResultsCount(studentsData.length);
}

// ======================================
// APERÇU DES COMPÉTENCES
// ======================================
function updateSkillsPreview() {
    const competencesInput = document.getElementById('competences');
    const previewDiv = document.getElementById('skills-preview');
    const tagsDiv = document.getElementById('skills-tags');
   
    const competences = competencesInput.value.split(',')
        .map(c => c.trim())
        .filter(c => c.length > 0);
   
    if (competences.length > 0) {
        previewDiv.style.display = 'block';
        tagsDiv.innerHTML = competences
            .map(comp => `<span class="skill-tag">${comp}</span>`)
            .join('');
    } else {
        previewDiv.style.display = 'none';
    }
}

// ======================================
// GESTION DES SPÉCIALITÉS PAR NIVEAU
// ======================================
function showSpecialtyOptions() {
    const niveauSelect = document.getElementById('niveau-etudes');
    const specialiteGroup = document.getElementById('specialite-group');
    const specialiteSelect = document.getElementById('specialite');
    
    const niveau = niveauSelect.value;
    
    if (!niveau) {
        specialiteGroup.style.display = 'none';
        return;
    }
    
    specialiteGroup.style.display = 'block';
    
    let options = ['<option value="">Sélectionnez...</option>'];
    
    if (niveau === 'l2') {
        options.push(
            '<option value="ebus">E-Business</option>',
            '<option value="bi">Business Intelligence</option>',
            '<option value="bis">Système d\'Information</option>'
        );
    } else if (niveau === 'l3') {
        options.push(
            '<option value="ebus">E-Business</option>',
            '<option value="bi">Business Intelligence</option>',
            '<option value="bis">Système d\'Information</option>'
        );
    } else if (niveau === 'm1' || niveau === 'm2') {
        options.push(
            '<option value="digital-marketing">Marketing Digital</option>',
            '<option value="digital-business">E-Business</option>',
            '<option value="bi">Business Intelligence</option>',
            '<option value="data-science">Data Science</option>'
        );
    }
    
    specialiteSelect.innerHTML = options.join('');
}

// ======================================
// GESTION DU FORMULAIRE
// ======================================
function handleSubmit(event) {
    event.preventDefault();
   
    const form = document.getElementById('form-inscription');
    const formData = new FormData(form);
   
    const userData = {
        nom: formData.get('nom'),
        email: formData.get('email'),
        telephone: formData.get('telephone'),
        niveau: formData.get('niveau-etudes'),
        specialite: formData.get('specialite'),
        competences: formData.get('competences').split(',').map(c => c.trim()),
        domainesInteret: formData.getAll('domaine-interet'),
        portfolio: formData.get('portfolio'),
        typesProjet: formData.getAll('type-projet'),
        bio: formData.get('bio')
    };
   
    if (!userData.nom || !userData.email) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }
   
    alert(`Merci ${userData.nom} ! Votre profil a été créé avec succès.\n\nVous recevrez un email de confirmation à ${userData.email}`);
   
    form.reset();
    document.getElementById('skills-preview').style.display = 'none';
    document.getElementById('specialite-group').style.display = 'none';
}

function handleReset() {
    document.getElementById('skills-preview').style.display = 'none';
    document.getElementById('specialite-group').style.display = 'none';
}

// ======================================
// AFFICHAGE DES DÉTAILS ÉTUDIANT
// ======================================
function showStudentDetails(student) {
    const details = `
👤 ${student.nom}

🎓 Niveau: ${getNiveauLabel(student.niveau)}
📚 Domaine: ${getDomaineLabel(student.domaine)}

💡 Compétences:
${student.competences.join(', ')}

✅ Disponible pour:
${student.disponibilite.map(d => getDisponibiliteLabel(d)).join(', ')}

📄 Bio:
${student.bio}
    `;
   
    alert(details);
}

// ======================================
// MODAL POUR LES PROJETS
// ======================================
function showProjectModal(index) {
    const project = projectsData[index];
    if (!project) return;
    
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <h2>${project.nom}</h2>
        <div style="margin: 1.5rem 0;">
            <p><strong>📌 Type:</strong> ${getProjectTypeLabel(project.type)}</p>
            <p><strong>💼 Domaine:</strong> ${project.domaine}</p>
            <p><strong>⏱️ Durée:</strong> ${project.duree}</p>
            <p><strong>🔧 Compétences:</strong> ${project.competences}</p>
        </div>
        <div style="margin: 1.5rem 0;">
            <h3>📝 Description</h3>
            <p>${project.description}</p>
        </div>
        <div>
            <h3>👥 Besoins de l'équipe</h3>
            <ul style="margin-left: 1.5rem;">
                ${project.besoins.map(b => `<li>${b}</li>`).join('')}
            </ul>
        </div>
        <div style="margin-top: 2rem; text-align: center;">
            <a href="inscription.html" class="btn-primary">Rejoindre ce Projet</a>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

function getProjectTypeLabel(type) {
    const labels = {
        'pfe': '📚 Projet de Fin d\'Études',
        'project': '🔬 Projet Académique',
        'creation': '🚀 Création de Startup',
        'debut': '🌱 Projet Début d\'Études'
    };
    return labels[type] || type;
}

// ======================================
// ANIMATIONS AU SCROLL
// ======================================
function animateOnScroll() {
    const elements = document.querySelectorAll('.student-card, .project-card, .feature-card, .domain-card');
   
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
       
        if (isVisible && !element.classList.contains('animated')) {
            element.classList.add('animated');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Fermer la modal en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProjectModal();
    }
}

console.log('Script ESEN Skill-Match chargé avec succès');
console.log('Étudiants disponibles:', studentsData.length);
console.log('Projets disponibles:', projectsData.length);