const Notification = props => {
    const {imageUrl, imageCls, msgCardCls, msgContent} = props.source;
  return (
    <div className={msgCardCls}>
      <img src={imageUrl} className={imageCls} />
      <p>{msgContent}</p>
    </div>
  )
}

const sourceprimary = {
  imageUrl = 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
  imgageCls = 'msg-cls',
  msgCardCls = 'msg-card-primary',
  msgContent = 'Information Message',
}
const sourceSuccess = {
  imageUrl = 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
  imgageCls = 'msg-cls',
  msgCardCls = 'msg-card-success',
  msgContent = 'Success Message',
}
const sourceWarning = {
  imageUrl = 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
  imgageCls = 'msg-cls',
  msgCardCls = 'msg-card-warning',
  msgContent = 'Warning  Message',
}
const sourceDanger = {
  imageUrl = 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
  imgageCls = 'msg-cls',
  msgCardCls = 'msg-card-danger',
  msgContent = 'Error Message',
}
const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceDanger} />
  </div>
);

ReactDOM.render(element, document.getElementById('root'))
