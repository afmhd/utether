import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

global.lang = {ff:"vr",ffb:"vb"}

  let styles = global.styles

  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={"current tether value"} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>
       {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}
        <div style={{width:"100%", height:100,backgroundColor:"lightsteelblue",borderRadius:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-xx/>
          at the moment:{(props.object.price as number).toLocaleString("en-UK")}
        </div>

        <br-x/>

        <div style={{width:"100%", height:100,backgroundColor:"lightsteelblue",borderRadius:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-xx/>
          price:{props.object.price}
        </div>

        <br-x/>

        <div style={{width:"100%", height:100,backgroundColor:"lightsteelblue",borderRadius:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-xx/>
         changes within 24 hours: % {(Number(props.object.diff24d) as number).toLocaleString("en-UK")} 
        </div>

        <br-x/>

        <div style={{width:"100%", height:100,backgroundColor:"lightsteelblue",borderRadius:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-xx/>
         changes within a week : % {(Number(props.object.diff7d) as number).toLocaleString("en-UK")} 
        </div>

        <br-x/>

        <div style={{width:"100%", height:100,backgroundColor:"lightsteelblue",borderRadius:10,
          textAlign:"center"
        }}>
          <br-x/>
          <br-xx/>
         changes within a month : % {(Number(props.object.diff30d) as number).toLocaleString("en-UK")} 
        </div>

        <br-x/>
        <br-x/>

        <center style={{fontSize:10}}>
          developed by Afrah Mohammadi
        </center>
        <br-x/>
        <br-x/>
        
       </Window>

    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let res = await fetch ("https://irmapserver.ir/usdt")
    let data = await res.json()
    let object =data.data.currencies.USDT
  
    console.log("PRICEEEEEE:", object)

  return {
    props: {
      data: global.QSON.stringify({
        object,
        session,
        // nlangs,
      })
    },
  }
}