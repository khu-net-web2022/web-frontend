import { useState } from 'react';

export default function SignupPage() {
  return (
    <SignupContainer />
  );
}

function SignupContainer() {
  const [  id,   setID] = useState("");
  const [  pw,   setPW] = useState("");
  const [ pw2,  setPW2] = useState("");
  const [name, setName] = useState("");
  
  const [  idErr, setIDErr] = useState("");
  const [  pwErr, setPWErr] = useState("");
  const [ pw2Err, setPW2Err] = useState("");
  const [nameErr, setNameErr] = useState("");

  function handleIDChange(e) {
    setID(e.target.value);
  }
  
  function handlePWChange(e) {
    setPW(e.target.value);
    // todo: add password safety check
  }
  
  function handlePW2Change(e) {
    setPW2(e.target.value);
    // todo: add pw value equal check
  }
  
  function handleNameChange(e) {
    setName(e.target.value);
    // todo: add username availbility check
  }

  function validate() {
    console.log("validating sign-up data");
    // id check
    setIDErr(idCheck(id));
    console.log(idErr);

    // pw check
    setPWErr(pwCheck(pw));

    // pw2 check
    setPW2Err(pw2Check(pw, pw2));

    // name check
    setNameErr(nameCheck(name));
  }
  
  return (
    <div className="signup-container">
      <ul>
        <ul>
          <li className="signup-title">{"회원가입"}</li>
        </ul>
        <SignupItem text="아이디" value={id} handleValue={handleIDChange} isPW={false} err={idErr}/>
        <SignupItem text="비밀번호" value={pw} handleValue={handlePWChange} isPW={true} err={pwErr}/>
        <SignupItem text="비밀번호 확인" value={pw2} handleValue={handlePW2Change} isPW={true} err={pw2Err}/>
        <SignupItem text="닉네임" value={name} handleValue={handleNameChange} isPW={false} err={nameErr}/>
        <button className="signup-button" onClick={validate}>가입</button>
      </ul>
    </div>
  );
}

function SignupItem({text, value, handleValue, isPW, err}) {
  return (
  <ul className="signup-item">
    <li className="signup-text">{text}</li>
    <li>
      <input
        type={isPW && "password"}
        value={value}
        onChange={handleValue}
        style={{color: (err && "crimson")}}>
      </input>
    </li>
    <li className="signup-error">{err}</li>
  </ul>
  );
}

function idCheck(id) {
  if (!(/^[a-zA-Z0-9_]+$/.test(id))) { // alphabets, numbers, and underscore(_)
    return ("ID는 영어, 숫자, 그리고 특수문자 '_'만 가능합니다.");
  }
  
  if (id.length > 20 || id.length < 5) { // length should be 5~20
    return ("ID는 5~20글자이어야 합니다.");
  }
  
  // todo: check if id already exists with API
  if (0) {
    return ("아이디가 이미 사용 중입니다.");
  }

  //console.log("id - successful");
  return ("");
}

function pwCheck(pw) {
  if (pw.length < 1) {
    return ("비밀번호를 입력해주세요.");
  }

  if (!(/^[a-zA-Z0-9.!@?#"$%&:';()*+,/;\-=[\\\]^_{|}<>~`]+$/.test(pw))) { // alphabets, numbers, and symbols
    return ("비밀번호는 영어, 숫자, 특수기호만 가능합니다.");
  }

  if (!(/[0-9]/.test(pw)) || !(/[a-zA-Z]/.test(pw))) { // must have both alphabets and numbers
    return ("비밀번호에 숫자와 영어가 들어가야 합니다.");
  }
  
  if (pw.length > 30 || pw.length < 8) { // length should be 8~(30 for now)
    return ("비밀번호는 8~30글자이어야 합니다.");
  }

  //console.log("pw - successful");
  return ("");

}

function pw2Check(pw, pw2) {
  if (pw !== pw2) {
    return ("비밀번호가 일치하지 않습니다.");
  }
  
  //console.log("pw2 - successful");
  return ("");

}

function nameCheck(name) {
  if (name.length < 1) {
    return ("닉네임을 입력해주세요.");
  }

  // todo: check if username is available
  if (0) {
    return ("닉네임이 이미 사용 중입니다.");
  }

  //console.log("name - successful");
  return ("");
}