import React,{Fragment} from 'react';
import gtmParts from 'react-google-tag-manager';
 
class GoogleTagManager extends React.Component {
    componentDidMount() {
        const dataLayerName = this.props.dataLayerName || 'dataLayer';
        const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';
 
        if (!window[dataLayerName]) {
            const gtmScriptNode = document.getElementById(scriptId);
 
            eval(gtmScriptNode.textContent);
        }
    }
 
    render() {
        const gtm = gtmParts({
            id: this.props.gtmId,
            dataLayerName: this.props.dataLayerName || 'dataLayer',
            additionalEvents: this.props.additionalEvents || {},
            previewVariables: this.props.previewVariables || false,
        });
 
        return (
            <Fragment>
                {gtm.noScriptAsReact()}
                <Fragment>
                    {gtm.scriptAsReact()}
                </Fragment>
            </Fragment>
        );
    }
}

export default GoogleTagManager;