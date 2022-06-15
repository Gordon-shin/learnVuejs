<template>
  <a-space>
    Space
    <a-button type="primary">Button</a-button>
    <a-upload>
      <a-button> <a-icon type="upload" /> Click to Upload </a-button>
    </a-upload>
    <a-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <a-button>Confirm</a-button>
    </a-popconfirm>
    <template>
      <div>
        <a-button type="primary" icon="search">
          Search
        </a-button>
        <a-button shape="circle" icon="search" />
        <a-button icon="search">
          Search
        </a-button>
        <a-button shape="circle" icon="search" />
        <a-button icon="search">
          Search
        </a-button>
        <a-button type="dashed" shape="circle" icon="search" />
        <a-button type="dashed" icon="search">
          Search
        </a-button>
      </div>
    </template>

  </a-space>
</template>
<script>
export default {};
</script>


