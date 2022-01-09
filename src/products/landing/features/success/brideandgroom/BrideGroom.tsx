import * as React from 'react';
import style from './style.module.scss'
export interface BrideGroomProps {
}

export default function BrideGroom (props: BrideGroomProps) {
    const titleDatas= {
        en:'Bride & Groom',
        ina:'Mempelai'
    }
    const textDatas = {
        brideName:{
            en:'Yasmin Meidiana Syarif, S.T.',
            ina:'Yasmin Meidiana Syarif, S.T.',
        },
        brideIdentity:{
            en:'The daughter of Mr. Aswin Gunther Sharif & Mrs. Sintya Liana Sofyan',
            ina:'Putri dari Bapak Aswin Gunther Sharif, S.E., Ak. & Ibu Sintya Liana Sofyan, S.H., M.Kn.'
        },
        brideInstagram:{
            en:'@yasminsyrf',
            ina:'@yasminsyrf'
        },
        groomName:{
            en:'Moh. Ilyas Bashirah Putra Arya, S.T.',
            ina:'Moh. Ilyas Bashirah Putra Arya, S.T.',
        },
        groomIdentity:{
            en:'The son of Achmad Sunaryo & Mrs. Suntari',
            ina:'Putra dari Bapak Achmad Suyono, S.Sos & Ibu Suntari'
        },
        groomInstagram:{
            en:'@milyasbpa',
            ina:'@milyasbpa'
        }

    }
  return (
    <div className={style['container-bride-and-groom']} >
      <div className={style['frame-1240']} >
        {/* text sambutan di atas */}
        {/* end text sambutan */}
        

      </div>
    </div>
  );
}
