import { stylesheet, constants, moment, toasts, clipboard } from "@vendetta/metro/common";
import { findByProps } from "@vendetta/metro";
import { semanticColors } from '@vendetta/ui';
import { getAssetByName } from "@vendetta/ui/assets";

const {View, Text, Pressable } = findByProps("Button", "Text", "View");

const snowflakeUtils = findByProps("extractTimestamp");

const MessageStyles = stylesheet.createThemedStyleSheet({
    'container': {
        'flex': 1,
        'padding': 16,
        'alignItems': 'center',
        'justifyContent': 'center',
    },
    'title': {
        'fontFamily': constants.Fonts.PRIMARY_SEMIBOLD,
        'fontSize': 24,
        'textAlign': 'left',
        'color': semanticColors.HEADER_PRIMARY,
        'paddingVertical': 25
    },
    'text': {
        'flex': 1,
        'flexDirection': 'row',
        'fontSize': 16,
        'textAlign': 'justify',
        'color': semanticColors.HEADER_PRIMARY,
    },
    'dateContainer': {
        'height': 16,
        'alignSelf': 'baseline'
    }
})

function FancyDate({date}) {
    return (
        <Pressable style={MessageStyles.dateContainer} onPress={() => {
            toasts.open({
                content: moment(date).toLocaleString(),
                source: getAssetByName("clock").id
            })
        }}
        onLongPress={() => {
            clipboard.setString(date.getTime().toString())
            toasts.open({ content: "Copied to clipboard" })
        }}>
            <Text style={MessageStyles.text}>{moment(date).fromNow()}</Text>
        </Pressable>
    )
}
const iconId = getAssetIdByName("ic_hide_24px");

export default function HiddenChannel({channel}) {
   return (
    <React.Component>
        <View style={MessageStyles.container}>
            <Text style={MessageStyles.title}>This channel is hidden.</Text>
            <Text style={MessageStyles.text}>
                Topic: {channel.topic || "No topic."}
                <View style={{ marginTop: 16 }}>
                    <Image
                        source={iconId}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
            </Text>
        </View>
    </React.Component>
);

}
