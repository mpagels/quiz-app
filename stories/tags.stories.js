export default {
  title: 'Tags',
}

export const Tag_List = () => /*html*/ `
    <div style="position: fixed;
    top: 50%;
    left: 50%;
   
    /* bring your own prefixes */
    transform: translate(-50%, -50%);">
    <span>
              <ul style = "display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              padding-left: 0px;
              width: 245px;
              align-items: center;
              line-height: 25px;">
                <li class="tags">HTML</li>
                <li class="tags">CSS</li>
                <li class="tags">Basics</li>
                <li class="tags">SASS</li>
              </ul>
            </span>
    </div>`

export const Tag = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;

/* bring your own prefixes */
transform: translate(-50%, -50%);">
<span>
          <ul>
            <li class="tags">HTML</li>
          </ul>
        </span>
</div>`
