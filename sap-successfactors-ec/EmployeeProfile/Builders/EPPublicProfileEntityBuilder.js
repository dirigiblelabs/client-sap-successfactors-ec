var method = EPPublicProfileEntityBuilder.prototype;

function EPPublicProfileEntityBuilder() {

}

method.aboutMeVideoToken = function(aboutMeVideoToken) {
	this.aboutMeVideoToken = aboutMeVideoToken;
	return this;
};

method.aboutMeVideoUploadId = function(aboutMeVideoUploadId) {
	this.aboutMeVideoUploadId = aboutMeVideoUploadId;
	return this;
};

method.applicationId = function(applicationId) {
	this.applicationId = applicationId;
	return this;
};

method.hasAboutMeVideo = function(hasAboutMeVideo) {
	this.hasAboutMeVideo = hasAboutMeVideo;
	return this;
};

method.hasIntroduction = function(hasIntroduction) {
	this.hasIntroduction = hasIntroduction;
	return this;
};

method.hasMyName = function(hasMyName) {
	this.hasMyName = hasMyName;
	return this;
};

method.hasMyNameAudio = function(hasMyNameAudio) {
	this.hasMyNameAudio = hasMyNameAudio;
	return this;
};

method.introduction = function(introduction) {
	this.introduction = introduction;
	return this;
};

method.isAddBadgeAllowed = function(isAddBadgeAllowed) {
	this.isAddBadgeAllowed = isAddBadgeAllowed;
	return this;
};

method.isBadgesSectionEnabled = function(isBadgesSectionEnabled) {
	this.isBadgesSectionEnabled = isBadgesSectionEnabled;
	return this;
};

method.isExpressiveMode = function(isExpressiveMode) {
	this.isExpressiveMode = isExpressiveMode;
	return this;
};

method.isExpressivePhotoEditable = function(isExpressivePhotoEditable) {
	this.isExpressivePhotoEditable = isExpressivePhotoEditable;
	return this;
};

method.mediaServiceBaseUrl = function(mediaServiceBaseUrl) {
	this.mediaServiceBaseUrl = mediaServiceBaseUrl;
	return this;
};

method.myNameAudioToken = function(myNameAudioToken) {
	this.myNameAudioToken = myNameAudioToken;
	return this;
};

method.myNameAudioUploadId = function(myNameAudioUploadId) {
	this.myNameAudioUploadId = myNameAudioUploadId;
	return this;
};

method.myNameText = function(myNameText) {
	this.myNameText = myNameText;
	return this;
};

method.userId = function(userId) {
	this.userId = userId;
	return this;
};

method.build = function() {
	return {
		aboutMeVideoToken: this.aboutMeVideoToken,
		aboutMeVideoUploadId: this.aboutMeVideoUploadId,
		applicationId: this.applicationId,
		hasAboutMeVideo: this.hasAboutMeVideo,
		hasIntroduction: this.hasIntroduction,
		hasMyName: this.hasMyName,
		hasMyNameAudio: this.hasMyNameAudio,
		introduction: this.introduction,
		isAddBadgeAllowed: this.isAddBadgeAllowed,
		isBadgesSectionEnabled: this.isBadgesSectionEnabled,
		isExpressiveMode: this.isExpressiveMode,
		isExpressivePhotoEditable: this.isExpressivePhotoEditable,
		mediaServiceBaseUrl: this.mediaServiceBaseUrl,
		myNameAudioToken: this.myNameAudioToken,
		myNameAudioUploadId: this.myNameAudioUploadId,
		myNameText: this.myNameText,
		userId: this.userId
	};
};

module.exports = EPPublicProfileEntityBuilder;
