<template>
  <form class="profile-photo" @submit.prevent="submitImage">
    <div class="profile-photo__container">
      <div>
        <div>
          <input
              v-if="!disableEdit"
              type="file"
              name="file-image"
              :id="id"
              class="inputImage"
              @change="onImageSelected"
              accept=".jpg, .jpeg"
          />
          <!--Preview image-->
          <label
              :for="id"
              class="btn btn--second profile-photo__add edit-mode"
          >
            <img
                v-if="avatar"
                :src="avatar"
                width="150"
                height="150"
                alt="profile picture"
                class="profile-photo__image"
            >
            <img
                v-else
                src="../assets/avatar.svg"
                width="150"
                height="150"
                alt="profile picture"
                class="profile-photo__image"
            />
          </label>
        </div>
      </div>
    </div>
    <div v-if="!disableSubmit" class="profile-photo__ctas">
      <button
          class="btn btn--second profile-photo__cancel"
          @click.prevent="cancel"
      >Cancel
      </button>
      <button
          type="submit"
          class="btn btn--prime profile-photo__submit"
      >Save</button>
    </div>
  </form>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'avatar',
  data() {
    return {
      imageData: null,
      disableSubmit: true,
      tempAvatarImage: "",
      id: 'file-image-edit' + Math.random(),
    }
  },
  props: {
    disableEdit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions(["saveProfileImage"]),
    onImageSelected(event) {
      const imageFile = event.target.files[0];
      // to view uploaded image
      if (typeof imageFile !== "object") {
        return;
      }
      let reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = event => { this.tempAvatarImage = event.target.result };
      this.disableSubmit = false;
    },
    cancel() {
      this.disableSubmit = true;
      this.tempAvatarImage = null;
    },
    submitImage() {
      this.disableSubmit = true;
      this.saveProfileImage(this.tempAvatarImage);
    },
  },
  computed: {
    ...mapState(["profileImage"]),
    avatar() {
      return this.tempAvatarImage || this.profileImage;
    }
  },
}
</script>
<style lang="scss">
.profile-photo {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__sub-header {
    padding-bottom: 12px;
  }
  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    border: none;
    background: white;
    overflow: hidden;
    cursor: pointer;
  }
  &__add {
    color: #3863ff;
    position: relative;
    &:hover {
      color: #378daf;
    }
  }
  &__ctas {
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    color: #deebef;
  }
  &__cancel, &__submit {
    padding: 5px;
    background: #1183a8;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
  &__cancel {
    margin-right: 6px;
  }
}
.inputImage {
  position: absolute;
  z-index: -1;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  opacity: 0;
  cursor: pointer;
}
</style>
