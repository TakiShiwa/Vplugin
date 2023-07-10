(function(r,i,s,l,d,R){"use strict";const{View:m,Text:f,Pressable:C,Image:P}=i.findByProps("Button","Text","View","Image"),h=i.findByProps("extractTimestamp"),o=s.stylesheet.createThemedStyleSheet({container:{flex:1,padding:16,alignItems:"center",justifyContent:"center"},title:{fontFamily:s.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:24,textAlign:"left",color:d.semanticColors.HEADER_PRIMARY,paddingVertical:25},text:{flex:1,flexDirection:"row",fontSize:16,textAlign:"justify",color:d.semanticColors.HEADER_PRIMARY},dateContainer:{height:16,alignSelf:"baseline",flexDirection:"row",alignItems:"center"},clockIcon:{width:16,height:16,marginRight:4}});function u(t){let{date:e}=t;const n=R.getAssetByName("ic_hide_24px"),a=d.semanticColors.HEADER_PRIMARY;return React.createElement(C,{style:o.dateContainer,onPress:function(){s.toasts.open({content:s.moment(e).toLocaleString(),source:n.id})},onLongPress:function(){s.clipboard.setString(e.getTime().toString()),s.toasts.open({content:"Copied to clipboard"})}},React.createElement(P,{style:[o.clockIcon,{tintColor:a}],source:n}),React.createElement(f,{style:o.text},s.moment(e).fromNow()))}function I(t){let{channel:e}=t;return React.createElement(m,{style:o.container},React.createElement(f,{style:o.title},"This channel is hidden."),React.createElement(f,{style:o.text},"Topic: ",e.topic||"No topic.",`

`,"Creation date: ",React.createElement(u,{date:new Date(h.extractTimestamp(e.id))}),`

`,"Last message: ",e.lastMessageId?React.createElement(u,{date:new Date(h.extractTimestamp(e.lastMessageId))}):"No messages.",`

`,"Last pin: ",e.lastPinTimestamp?React.createElement(u,{date:new Date(e.lastPinTimestamp)}):"No pins."))}let c=[];const E=i.findByProps("getChannelPermissions","can"),T=i.findByProps("transitionToGuild"),x=i.findByProps("stores","fetchMessages"),{ChannelTypes:p}=i.findByProps("ChannelTypes"),{getChannel:M}=i.findByProps("getChannel"),A=[p.DM,p.GROUP_DM,p.GUILD_CATEGORY];function g(t){if(t==null||(typeof t=="string"&&(t=M(t)),!t||A.includes(t.type)))return!1;t.realCheck=!0;let e=!E.can(s.constants.Permissions.VIEW_CHANNEL,t);return delete t.realCheck,e}function D(){const t=i.findByName("MessagesWrapperConnected",!1);c.push(l.after("can",E,function(e,n){let[a,y]=e;return!y?.realCheck&&a===s.constants.Permissions.VIEW_CHANNEL?!0:n})),c.push(l.instead("transitionToGuild",T,function(e,n){const[a,y]=e;!g(y)&&typeof n=="function"&&n(e)})),c.push(l.instead("fetchMessages",x,function(e,n){const[a]=e;!g(a)&&typeof n=="function"&&n(e)})),c.push(l.instead("default",t,function(e,n){const a=e[0]?.channel;return!g(a)&&typeof n=="function"?n(...e):s.React.createElement(I,{channel:a})}))}var _={onLoad:D,onUnload:function(){for(const t of c)t()}};return r.default=_,Object.defineProperty(r,"__esModule",{value:!0}),r})({},vendetta.metro,vendetta.metro.common,vendetta.patcher,vendetta.ui,vendetta.ui.assets);
