// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('guides').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      }, err => console.log(err.message));
    } else {
      setupUI();
      setupGuides([]);
    }
  });
  
  // create new guide
  const createForm = document.querySelector('#create-form');
  createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('guides').add({
      title: createForm.title.value,
      content: createForm.content.value
    }).then(() => {
      // close the create modal & reset form
      createForm.reset();
    }).catch(err => {
      console.log(err.message);
    });
  });
  
  // signup
  const signupForm = document.querySelector('#createAccount-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const email = signupForm['floatingEmail'].value;
    const password = signupForm['floatingPassword'].value;
  
    // sign up the user & add firestore data
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      return db.collection('users').doc(cred.user.uid).set({
        username: signupForm['floatingUsername'].value
      });
    }).then(() => {
      // close the signup modal & reset form
      signupForm.reset();
    });
  });
  
  // logout
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });
  
  // sign in
  const signinForm = document.querySelector('#signin-form');
  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info
    const username = signinForm['floatingUsername'].value;
    const password = signinForm['floatingPassword'].value;
  
    // sign the user in
    auth.signInWithEmailAndPassword(username, password).then((cred) => {
      // close the signup modal & reset form
      signinForm.reset();
    });
  
  });