<template>
  <mdb-container>
    <mdb-row class="mt-5">
      <mdb-col md="12">
        <mdb-card reverse>
          <mdb-view hover cascade>
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" class="img-fluid" />
            <mdb-mask overlay="white-slight" class="waves-light" waves />
          </mdb-view>
          <mdb-card-body class="text-center cascade">
            <h2 class="font-weight-bold">
              <a>Title of the news</a>
            </h2>
            <d-col cols="4">
              <router-link to="/landing">
                <d-button size="lg" class="font-weight-bold" theme="warning">Back</d-button>
              </router-link>
            </d-col>
            <p>
              Written by
              <a>
                <strong>Abby Madison</strong>
              </a>, 26/08/2018
            </p>
            <mdb-btn class="btn-fb waves-light">
              <mdb-icon fab icon="facebook" class="pr-2" />Facebook
            </mdb-btn>
            <span class="counter">46</span>
            <mdb-btn class="btn-tw waves-light">
              <mdb-icon fab icon="twitter" class="pr-2" />Twitter
            </mdb-btn>
            <span class="counter">22</span>
            <mdb-btn class="btn-gplus waves-light">
              <mdb-icon fab icon="google-plus" class="pr-2" />Google
            </mdb-btn>
            <span class="counter">31</span>
            <mdb-btn color="default" class="waves-light">
              <mdb-icon fab icon="comments" class="pr-2" />Comments
            </mdb-btn>
            <span class="counter">18</span>
          </mdb-card-body>
        </mdb-card>
        <mdb-container class="mt-5">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa nemo enim
            ipsam voluptatem quia voluptas sit qui officia deserunt mollitia animi, id est laborum et dolorum fuga quidem rerum
            facilis est distinctio.
          </p>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur. Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.
          </p>
        </mdb-container>
      </mdb-col>
    </mdb-row>
    <hr class="mb-5 mt-4" />
  </mdb-container>
</template>