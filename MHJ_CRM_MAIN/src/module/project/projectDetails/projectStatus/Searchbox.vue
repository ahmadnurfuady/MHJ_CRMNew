<template>
  <div class="row">
    <div class="col-12">
      <div class="card filter-header">
        <div class="card-body">
          <div class="input-group common-searchbox">
            <span class="input-group-text">
              <SolarIcon
                name="magnifier"
                class="search-icon"
                :size="18"
                color="#032A4E"
                secondary-color="#18A6E4"
                :secondary-opacity="0.75"
                aria-hidden="true"
              />
            </span>
            <input class="form-control" type="text" placeholder="Search Peluang..." />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
