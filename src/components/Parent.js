import React, { useEffect } from 'react';
import Child from './Child';
import "../style.css"
const Parent = React.memo(() => {
    useEffect(()=>{
    // event.subscribe("child", handler)
    }, [])

    return (
        <div style={{border: '1px solid black', padding: 20, marginTop: 5}}>
            <div><h1>parent</h1></div>
            <Child />
            <div className="container">
                <div className="parent">
                    <p>flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj fljfasdfas asdjfjaslkjdf jasldfasdl
                    flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj flj asdjfjaslkjdf jasld l
                    flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj flj asdjfjaslkjdf jasld l
                    flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj flj asdjfjaslkjdf jasld l
                    flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj flj asdjfjaslkjdf jasld l
                    flakjsldkjf alksjdflkjasljdfl jasldjfkj asldj flj asdjfjaslkjdf jasld l
                        <p className="floater">i am hidden content</p>
                    </p>
                </div>
            </div>
            <div class="wrapper">
  <ul>
    <li>Abc</li>
    <li>Def</li>
    <li>Ghi</li>
    <li>Jkl</li>
    <li class="parent">Mno =
      <div class="wrapper">
        <ul>
          <li>Abc</li>
          <li>Def</li>
          <li>Ghi</li>
          <li>Jkl</li>
          <li class="parent">Mno =
            <div class="wrapper">
              <ul>
                <li>Abc</li>
                <li>Def</li>
                <li>Ghi</li>
                <li>Jkl</li>
                <li>Mno</li>
                <li>Pqr</li>
                <li>Stu</li>
                <li>Vw</li>
                <li>Xyz</li>
              </ul>
            </div>
          </li>
          <li>Pqr</li>
          <li>Stu</li>
          <li>Vw</li>
          <li>Xyz</li>
        </ul>
      </div>
    </li>
    <li>Pqr</li>
    <li>Stu</li>
    <li>Vw</li>
    <li>Xyz</li>
    <li class="parent">Abc =
      <div class="wrapper">
        <ul>
          <li>Abc</li>
          <li>Def</li>
          <li>Ghi</li>
          <li>Jkl</li>
          <li>Mno</li>
          <li>Pqr</li>
          <li>Stu</li>
          <li>Vw</li>
          <li>Xyz</li>
        </ul>
      </div>
    </li>
    <li>Def</li>
    <li>Ghi</li>
    <li>Jkl</li>
    <li>Mno</li>
    <li>Pqr</li>
    <li>Stu</li>
    <li>Vw</li>
    <li>Xyz</li>
  </ul>
</div>
        </div>
    )
})

export default Parent;