document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // Ferme toutes les réponses
      document.querySelectorAll('.faq-answer').forEach((ans) => {
        ans.style.display = 'none';
      });

      // Ouvre la réponse sélectionnée si elle était fermée
      if (!isOpen) {
        answer.style.display = 'block';
      }
    });
  });