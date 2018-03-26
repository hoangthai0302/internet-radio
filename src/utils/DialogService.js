import React from 'react'
import ReactDOM from 'react-dom'
import './Dialog.css'

export default  {
    showLoading(parentId) {
        let backdop = document.getElementById('backdrop');
        if (!backdop) {
            backdop = document.createElement('div');
            backdop.id = 'backdop';
            let parent = document.getElementById(parentId);

            let el = <div className="loading-spinner">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>

            ReactDOM.render(
                el, backdop
            )

            if(parent){
                parent.appendChild(backdop);
                parent.style.position ='relative'
            }else{
                document.body.appendChild(backdop);
            }
          

        }else{
            backdop.style.display = 'block';
        }

    },

    hideLoading(){
        document.getElementById('backdop').style.display = 'none'
    }
}